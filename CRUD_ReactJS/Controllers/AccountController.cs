using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD_ReactJS.Areas.Identity.Data;
using CRUD_ReactJS.Models.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace CRUD_ReactJS.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        UserManager<ApplicationUser> userManager;
        SignInManager<ApplicationUser> signInManager;
        public AccountController(UserManager<ApplicationUser> _userManager, SignInManager<ApplicationUser> _signInManager)
        {
            userManager = _userManager;
            signInManager = _signInManager;
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> RegisterConfirm(string model)
        {
            var registerForm = JsonConvert.DeserializeObject<RegisterForm>(model);
            ApplicationUser user = new ApplicationUser
            {
                UserName = registerForm.Email,
                Email = registerForm.Email
            };
            if (ModelState.IsValid)
            {
                var status =await userManager.CreateAsync(user, registerForm.Password);
            }
            return View();
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> LoginConfirm(string model)
        {
            var LoginForm = JsonConvert.DeserializeObject<LoginForm>(model);
            var user = await userManager.FindByEmailAsync(LoginForm.Email);
            var status = await signInManager.PasswordSignInAsync(user,LoginForm.Password, true, true);
            return View();
        }
    }
}