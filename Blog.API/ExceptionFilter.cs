namespace Blog.API;

public class ExceptionFilter : ActionFilterAttribute, IExceptionFilter
{
    public void OnException(ExceptionContext ex)
    {
        string y = ex.Exception.Message;
    }
}
