using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF.DTO.User
{
    public class PublicHoliday
    {
        public string Summary { get; set; }
        public List<Item> Items { get; set; }
    }

    public class Item
    {
        public string Summary { get; set; }
        public Start Start { get; set; }
        public End End { get; set; }

    }

    public class StartEnd
    {
        public string Date { get; set; }
    }

    public class Start : StartEnd
    {

    }

    public class End : StartEnd
    {

    }

}
