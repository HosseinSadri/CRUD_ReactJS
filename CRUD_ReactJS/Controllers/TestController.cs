using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CRUD_ReactJS.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace CRUD_ReactJS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        readonly CRUD_ReactJSContext db;
        public TestController(CRUD_ReactJSContext _db)
        {
            db = _db;
        }
        //[HttpPost("[action]")]
        //public RedirectResult insertproductss(ProductInsert model)
        //{
        //    if (ModelState.IsValid == true)
        //    {
        //        Product tbl = new Product
        //        {
        //            Name = model.Name,
        //            Price = model.Price,
        //            Count = model.Count
        //        };
        //        db.Add(tbl);
        //        db.SaveChanges();
        //        return RedirectPermanent("/ProductList");
        //    }
        //    return RedirectPermanent("/InsertProduct");
        //}
        [HttpGet("[action]")]
        public IActionResult LoadJson()
        {
            using (StreamReader r = new StreamReader(@"wwwroot\files\Province.json"))
            {
                if (db.cities.Count() < 10)
                {
                    string json = r.ReadToEnd();
                    List<Province> items = JsonConvert.DeserializeObject<List<Province>>(json);
                    var j = 1;
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
                return Json("exist");
            }
        }
        [HttpGet("[action]")]
        public IActionResult test3(int a)
        {
            return Json(a);
        }
    }
}