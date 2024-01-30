using HF.Service.Infrastructure;
using HF.Service.User;
using Microsoft.AspNetCore.Hosting;

namespace HumanForce.StartUp
{
    public static partial class ServiceInitializer
    {
        public static IServiceCollection RegisterApplicationServices(this IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddHttpContextAccessor();
            RegisterCustomDependencies(services);
            RegisterSingleTonDependencies(services);
            return services;
        }

        private static void RegisterSingleTonDependencies(IServiceCollection services)
        {
            var webhostService = services.BuildServiceProvider().GetService<IWebHostEnvironment>();
            services.AddSingleton<IServerServiceConfiguration>(new ServerServiceConfiguration(webhostService.ContentRootPath));


        }

        private static void RegisterCustomDependencies(IServiceCollection services)
        {

            services.AddScoped<IUserService, UserService>();

        }
    }
}
