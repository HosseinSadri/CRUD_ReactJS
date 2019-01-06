using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD_ReactJS.Models;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_ReactJS.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        CRUD_ReactJSContext db;
        public TestController(CRUD_ReactJSContext _db)
        {
            db = _db;
        }
        [HttpPost("[action]")]
        public RedirectResult insertproductss(ProductInsert model)
        {
            if (ModelState.IsValid == true)
            {
                Product tbl = new Product
                {
                    Name = model.Name,
                    Price = model.Price,
                    Count = model.Count
                };
                db.Add(tbl);
                db.SaveChanges();
                return RedirectPermanent("/ProductList");
            }
            return RedirectPermanent("/InsertProduct");
        }
    }
}