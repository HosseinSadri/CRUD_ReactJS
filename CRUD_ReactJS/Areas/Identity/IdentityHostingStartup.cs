using System;
using CRUD_ReactJS.Areas.Identity.Data;
using CRUD_ReactJS.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(CRUD_ReactJS.Areas.Identity.IdentityHostingStartup))]
namespace CRUD_ReactJS.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<CRUD_ReactJSContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("CRUD_ReactJSContextConnection")));

                services.AddDefaultIdentity<ApplicationUser>()
                    .AddEntityFrameworkStores<CRUD_ReactJSContext>();
                services.Configure<IdentityOptions>(x =>
                {
                    x.Password.RequiredLength = 3;
                    x.Password.RequireLowercase = false;
                    x.Password.RequireUppercase = false;
                    x.Password.RequireNonAlphanumeric = false;
                    x.Password.RequireDigit = false;
                    x.Password.RequiredUniqueChars = 0;

                    x.Lockout.MaxFailedAccessAttempts = 3;
                    x.Lockout.AllowedForNewUsers = true;
                    x.Lockout.DefaultLockoutTimeSpan = new TimeSpan(0, 2, 0);
                });
            });
        }
    }
}