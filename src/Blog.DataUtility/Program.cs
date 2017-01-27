using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Microsoft.Extensions.Configuration;
using Autofac;
using Blog.Services;
using Blog.Domain;
using Blog.Core;
using Blog.Services.Integration;

// https://blogs.msdn.microsoft.com/cesardelatorre/2016/06/28/running-net-core-apps-on-multiple-frameworks-and-what-the-target-framework-monikers-tfms-are-about/

namespace Blog.DataUtility
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Clear();
            Console.WriteLine("Input environment (prod OR development): ");
            string env = Console.ReadLine().ToLower();

            if (string.IsNullOrEmpty(env))
                env = "development";

            if (env != "development" && env != "prod")
            {
                Console.WriteLine("unknown environment.  Press any key to exit...");
                Console.ReadKey();
                return;
            }
            Console.WriteLine(String.Format("DataUtility is running.  Environment is {0}.", env));
            // BaseTest x = new BaseTest();
            DbUpdater u = new DbUpdater(env);
            u.Update().Wait();
        }
    }


    public class BaseTest : BaseDbClient
    {
        public BaseTest(string env) : base(env)
        {
            InitializeDatabase();
            SeedDatabase();
        }

        protected void InitializeDatabase()
        {
            DropAndRecreateInitializer initializer = container.Resolve<DropAndRecreateInitializer>();
            initializer.EnsureCreated();
        }

        protected void SeedDatabase()
        {
            ServiceClient.OfType<ISiteService>().TryAsync(x => x.SeedDB()).Wait();
        }
    }
}
