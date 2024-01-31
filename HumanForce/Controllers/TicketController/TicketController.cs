using HF.Service.Ticket;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HumanForce.Controllers.TicketController
{
    [Route("[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly ITicketService _ticketService;
        public TicketController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }



        [HttpGet("gettickets")]
        public IActionResult GetTickets()
        {
            return Ok(_ticketService.GetTickets());
        }
    }
}
