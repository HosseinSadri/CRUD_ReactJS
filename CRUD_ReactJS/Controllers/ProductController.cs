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
                Id=x.Id,
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
        public string InsertProduct(string model)
        {
            var modelClass = JsonConvert.DeserializeObject<ProductInsert>(model);
            Product tbl = new Product
            {
                Name = modelClass.Name,
                Price = modelClass.Price,
                Count = modelClass.Count,
                Brand_Id = 1,
                City_Id = 2441
            };
            db.Add(tbl);
            db.SaveChanges();
            return ("ok");
        }
        [HttpGet("[action]")]
        public IActionResult ProductDetails(int id)
        {
            var SelectedProduct = db.products.Find(id);
            // var SelectedProduct = db.products.Select(Asnewtbl).ToList();
            //SelectedProduct.Name = "reza";
            return Json(SelectedProduct);
        }
        [HttpPut("[action]")]
        public IActionResult EditProduct(string model,int Id)
        {
            var modelClass = JsonConvert.DeserializeObject<ProductInsert>(model);
            //var SelectedProduct= db.products.Find(id);
            var SelectedProduct= db.products.Find(Id);
            SelectedProduct.Name = modelClass.Name;
            SelectedProduct.Price = modelClass.Price;
            SelectedProduct.Count = modelClass.Count;
            db.SaveChanges();
            return Json("");
        }
        [HttpGet("[action]")]
        public IActionResult SaveCitiesSql()
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
        public class ProvinceV
        {
            public int ProvienceId { get; set; }
            public string Provience { get; set; }
            public ICollection<City> city { get; set; }
        }
     


        private static readonly Expression<Func<Province, ProvinceV>> proviencecities =
    x => new ProvinceV
    {
        ProvienceId = x.Id,
        Provience = x.name,
        city = x.Cities,

    };
        [HttpGet("[action]")]
        public async Task<IActionResult> GetCities()
        {
            var tbl = await Task.Run(() => db.provinces.Select(proviencecities).ToList());
            return Json(tbl);
        }
    }
}