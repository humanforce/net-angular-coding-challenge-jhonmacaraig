using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF.DTO.User
{
    public class UserLocationDTO:BaseDTO
    {
        public string Country { get; set; }
        public string Region { get; set; }
    }
}
