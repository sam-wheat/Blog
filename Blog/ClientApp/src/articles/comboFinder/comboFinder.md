<article>

Many types of business problems are solved using techniques that require analysis of a combination of objects that are chosen from a set.  You probably remember from statistics class that a combination is a selection of objects chosen from a set where order is not relevant.

This article demonstrates a small program that systematically chooses a designated number of elements from a set and passes them to a fitness function for evaluation.  The program chooses different elements with each pass until all elements have been evaluated or the fitness function tells it to stop.  This generic collection finder accepts three parameters:  The first parameter is an integer that indicates how many items are to be chosen from the collection.  The second parameter is the collection from which items are to be chosen.  The third parameter is a fitness function that is called with the selected combination of items as a parameter.  The fitness function can do whatever processing is necessary for the problem at hand.  If the fitness function returns true (success), the collection finder stops processing.

Lets use this program to solve a simple business problem. Lets say a cargo ship can carry up to six shipping containers for a maximum total weight of 800 tons.  If all weights are equal, it is preferable to carry more containers than fewer since the load is more evenly distributed throughout the ship.  However, the shipping company bills by the ton so in order to maximize revenue, the company always loads the ship with as much weight as possible up to it's limit of 800 tons.

There are ten containers that need to be shipped.  Your job as The President In Charge Of Choosing Which Containers To Ship is too choose up to six containers that weigh as much as possible, but less than or equal to 800 tons.  Which containers should you choose?  Remember that shipping more containers is not always optimal.  Shipping one container of exactly 800 tons is preferable to shipping three containers if their weights sum to only 799 tons.

Here is how the collection finder will solve this problem:  From the collection of ten containers, six are chosen.  The six chosen containers are passed to the fitness function, ChooseContainers.  ChooseContainers sums the weight of the passed containers.  If the weight is less than or equal to 800 tons, the sum is compared to the maximum weight found thus far.  If the sum is greater than the best found thus far, it is saved as the best option.


After evaluating every combination of six containers, every combination of five containers is evaluated, then every combination of four and so on.

Note that the ChooseContainers method always returns false.  This is because we want to force the CollectionFinder to evaluate every combination of containers (theoretically we could stop processing if we find a combination of containers that weighs exactly 800 tons).  Also note that we start by choosing six containers and progressively choose fewer.   This is because a solution with a larger number of containers is favorable to a solution with a fewer number if both weigh exactly the same.  


After every combination of containers is evaluated the optimal list of containers is displayed.

```C#
class Program
{
    string selectedContainers = "";
    int mostWeight = 0;

    static void Main(string[] args)
    {
        new Program().Run();
    }

    public void Run()
    {
        // This is the list of containers from which we will choose.  
        // The number in the list represents the weight of each container.
        List<int> containers = new List<int> { 121, 287, 142, 112, 160, 74, 186, 143, 168, 121 };

        // Tell the collection finder to select 6 containers from the list 
        // and call ChooseContainers to evaluate their weight.  
        // We then choose 5, then 4, etc.
            
        for (int i = 6; i > 0; i--)
            CollectionFinder<int>(i, containers, ChooseContainers);

        Console.WriteLine(string.Format("The best option is {0} for a total weight of {1} tons.", selectedContainers, mostWeight));
        Console.ReadLine();
    }

    public bool ChooseContainers(IList<int> containers)
    {
        string option = "";
        foreach (int c in containers)
            option = option + (option.Length > 0 ? "," : "") + c.ToString();

        int weight = containers.Sum(x => x);

        Console.WriteLine(string.Format("Evaluating {0} ({1} tons)", option, weight));

        if (weight <= 800 && weight > mostWeight)
        {
            mostWeight = weight;
            selectedContainers = option;
        }
        return false;
    }


    public static void CollectionFinder<T>(int r, IList<T> list, Predicate<IList<T>> fitnessFunc)
    {
        #region Error Checking
        // it is valid, albeit pointless, for r to be zero.
        if (r < 0)
            throw new Exception("r must be greater than or equal to zero.");

        if (list == null)
            throw new Exception("list cannot be null.");

        if (r > list.Count)
            throw new Exception("r cannot be greater than list count.");

        #endregion

        int n = list.Count;
        int[] indexes = new int[r];
        List<T> collection = new List<T>();
        int rightmost = r - 1;

        for (int i = 0; i < r; i++)
        {
            indexes[i] = i;
            collection.Add(list[i]);
        }

        while (true)
        {
            // Build the result collection
            for (int i = 0; i < r; i++)
                collection[i] = list[indexes[i]];

            // Call the fitness function.  
            // If the fitness function returns true (sucesss) we are done.
                
            if (fitnessFunc(collection))
                break;

            // Starting with the rightmost index, increment the first index that is pointing 
            // at an element that is not at the end of the data list.
            // Save that index as the alignment index. 
                
            int alignmentIndex = -1;

            for (int i = 0; i <= rightmost; i++)
            {
                if (indexes[rightmost - i] < n - i - 1)
                {
                    alignmentIndex = rightmost - i;
                    indexes[rightmost - i]++;
                    break;
                }
            }

            if (alignmentIndex == -1)
                break;  // no more indexes to increment, we are done.
            else
            {
                // Reset all indexes to the right to point to data 
                // elements immediately following the alignmentIndex 
                    
                if (alignmentIndex < rightmost)
                    for (int i = alignmentIndex + 1; i <= rightmost; i++)
                        indexes[i] = indexes[i - 1] + 1;
            }
        }
    }
}
```

</article>