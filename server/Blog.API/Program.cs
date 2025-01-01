using System;
using System.Threading.Tasks;
using Blog.API.Persistence.Context;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Blog.API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            try
            {
                await InitializeApplicationAsync(host);
                await host.RunAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            return Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
        }

        private static async Task InitializeApplicationAsync(IHost host)
        {
            using var scope = host.Services.CreateScope();
            var services = scope.ServiceProvider;
            var logger = services
                .GetRequiredService<ILoggerFactory>()
                .CreateLogger<Program>();

            try
            {
                // Migrate the database
                var context = services.GetRequiredService<ApplicationDbContext>();
                logger.LogInformation("Applying migrations...");
                await context.Database.MigrateAsync();

                // Seed data
                logger.LogInformation("Seeding data...");
                await DataSeed.InitializeDataSeed(context);

                logger.LogInformation("Application initialization completed successfully.");
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred during application initialization.");
            }
        }
    }
}