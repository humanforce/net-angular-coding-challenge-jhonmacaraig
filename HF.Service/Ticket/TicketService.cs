using HF.DTO.Ticket;
using HF.Service.Infrastructure;

namespace HF.Service.Ticket
{

    public interface ITicketService
    {
        List<TicketDTO> GetTickets();
    }
    public class TicketService : ITicketService
    {
        private readonly IServerServiceConfiguration _serverServiceConfiguration;
        public TicketService(IServerServiceConfiguration serverServiceConfiguration)
        {
            _serverServiceConfiguration = serverServiceConfiguration;
        }

        public List<TicketDTO> GetTickets()
        {
            throw new NotImplementedException();
        }
    }
}
