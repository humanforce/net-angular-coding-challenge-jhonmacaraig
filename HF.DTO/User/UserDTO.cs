namespace HF.DTO.User
{
    public class UserDTO : BaseDTO
    {
        public string Name { get; set; } 
        public UserLocationDTO Location { get; set; }
    }
}
