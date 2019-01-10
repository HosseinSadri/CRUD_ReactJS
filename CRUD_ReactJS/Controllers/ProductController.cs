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
using System.IO;

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
                Price = x.Price,
                Count = x.Count,
                Brand = x.productBrand.Name,
                City = x.city.Name,
                Province = x.city.province.name,
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
        [HttpGet("[action]")]
        public IActionResult LoadJsonCity()
        {
            if (db.cities.Count() < 10)
            {
                using (StreamReader r = new StreamReader(@"wwwroot\files\Province.json"))
                {
                    string json = r.ReadToEnd();
                    List<Province> items = JsonConvert.DeserializeObject<List<Province>>(json);
                    var j = 1; //last inserted id
                    foreach (var item in items)
                    {
                        Province tblProvinces = new Province()
                        {
                            name = item.name
                        };
                        db.provinces.Add(tblProvinces);
                        db.SaveChanges();
                        foreach (var item2 in item.Cities)
                        {
                            City tblCities = new City()
                            {
                                Name = item2.Name,
                                Province_Id = j,
                            };
                            db.cities.Add(tblCities);
                            db.SaveChanges();
                        }
                        ++j;
                    }
                    return Json("ok");
                }
            }
                return Json("exist");
        }
    }
}