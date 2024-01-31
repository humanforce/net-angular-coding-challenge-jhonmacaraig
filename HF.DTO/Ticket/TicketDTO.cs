namespace HF.DTO.Ticket
{
    public class TicketDTO
    {
        public int Total { get; set; }
        public IList<Issue> Issues { get; set; }
    }

    public class Issue : BaseDTO
    {
        public List<Field> Fields { get; set; }
    }

    public class Field
    {
        public string Summary { get; set; }

    }
}
