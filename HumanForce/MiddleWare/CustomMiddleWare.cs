using Newtonsoft.Json;
using System.Net;

namespace SMS.WebAPI.MiddleWare
{
    public class CustomMiddleWare
    {
        private readonly RequestDelegate _next;
        public CustomMiddleWare(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                if (httpContext.Request != null)
                {
                    
                }
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(httpContext, ex);
            }
        }
        private static Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            string payLoad = string.Empty;

            if (context.Request.Method == "GET")
            {
                if (context.Request.Query != null)
                {
                    payLoad = JsonConvert.SerializeObject(context.Request.Query);
                }
            }
            else
            {
                if (context.Request.HasJsonContentType())
                {
                    payLoad = "";
                }
            }

            //int exceptionID = exceptionService.LogExceptionError(exception, context.Request.Path, context.Request.Method, context.Connection.RemoteIpAddress?.ToString(), payLoad);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            var tempCode = "1234";
            var errorResponse = new ErrorResponse
            {
                Message = $"{tempCode}: An error occurred. Please call the technical support",
            };

            var jsonErrorResponse = JsonConvert.SerializeObject(errorResponse);
            return context.Response.WriteAsync(jsonErrorResponse);
        }

        private class ErrorResponse
        {
            public string Message { get; set; }
        }
    }
}


