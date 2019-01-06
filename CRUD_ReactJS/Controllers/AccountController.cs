using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_ReactJS.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        [HttpPost("[action]")]
        public IActionResult RegisterConfirm(string model)
        {
            return View();
        }
    }
}