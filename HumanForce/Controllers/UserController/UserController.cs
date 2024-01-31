using HF.Service.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HumanForce.Controllers.UserController
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("getteammembers")]
        public IActionResult GetTeamMembers()
        {
            return Ok(_userService.GetTeamMembers());
        }
        
        [HttpGet("getpublicholiday")]
        public IActionResult GetPublicHoliday(int id)
        {
            return Ok(_userService.GetPublicHoliday(id));
        }
    }
}
