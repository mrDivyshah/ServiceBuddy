using Microsoft.AspNetCore.Mvc;

namespace ServiceBuddy.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
