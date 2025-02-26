using Microsoft.AspNetCore.Mvc;

namespace ServiceBuddy.Controllers
{
    public class MapController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
