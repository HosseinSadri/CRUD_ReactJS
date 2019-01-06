using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD_ReactJS.Areas.Identity.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CRUD_ReactJS.Models
{
    public class CRUD_ReactJSContext : IdentityDbContext<ApplicationUser>
    {
        public CRUD_ReactJSContext(DbContextOptions<CRUD_ReactJSContext> options)
            : base(options)
        {
            //Database.SetCommandTimeout(15000);
        }
        public DbSet<Product> products { get; set; }
        public DbSet<ProductImage> productImages { get; set; }
        public DbSet<ProductBrand> productBrands { get; set; }
        public DbSet<City> cities { get; set; }
        public DbSet<Province> provinces { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
    }
}
