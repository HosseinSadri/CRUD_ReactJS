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
        public void LoadJson(int a)
        {
            using (StreamReader r = new StreamReader(@"~\files\Province.json"))
            {
                string json = r.ReadToEnd();
                List<Province> items = JsonConvert.DeserializeObject<List<Province>>(json);
            }

        }
    }
}