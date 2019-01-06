using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CRUD_ReactJS.Areas.Identity.Data;
using CRUD_ReactJS.Models;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace CRUD_ReactJS.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        CRUD_ReactJSContext db;
        public ProductController(CRUD_ReactJSContext _db)
        {
            db = _db;
        }
        private static readonly Expression<Func<Product, ProductList>> Asnewtbl =
            x => new ProductList
            {
                Name = x.Name,
                Price=x.Price,
                Count=x.Count,
                Brand= x.productBrand.Name,
                City= x.city.Name,
                Province=x.city.province.Name,
            };
        [HttpGet("[action]")]
        public IActionResult ProductList()
        {
            var product_tbl = db.products.Select(Asnewtbl).ToList();
            //var product_tbl = db.products.Include(x=>x.city).Where(x=>x.City_Id==3).Select(Asnewtbl).ToList();
            return Json(product_tbl);
        }
        [HttpPost("[action]")]
        public string InsertProduct2(string model)
        {
            var modelClass = JsonConvert.DeserializeObject<ProductInsert>(model);
            Product tbl = new Product
            {
                Name = modelClass.Name,
                Price = modelClass.Price,
                Count = modelClass.Count,
                Brand_Id = 1,
                City_Id = 1
            };
            db.Add(tbl);
            db.SaveChanges();
            return ("ok");
        }
    }
}