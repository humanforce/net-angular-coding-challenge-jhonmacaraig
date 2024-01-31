using HF.DTO.User;
using HF.Service.Helper;
using HF.Service.Infrastructure;
using Newtonsoft.Json;

namespace HF.Service.User
{

    public interface IUserService
    {
        public List<UserDTO> GetTeamMembers();
        public PublicHoliday GetPublicHoliday(int id);
    }
    public class UserService : IUserService
    {
        private readonly IServerServiceConfiguration _serverServiceConfiguration;
        private string filePathTeamMember = @"\Resources\TeamMembers.json";
        private string filePathPublicHoliday = @"\Resources\GoogleCalendarAPI";
        public UserService(IServerServiceConfiguration serverServiceConfiguration)
        {
            _serverServiceConfiguration = serverServiceConfiguration;
        }

        public PublicHoliday GetPublicHoliday(int id)
        {
            string fileName = "";

            if (id == (int)EnumUtility.Country.Australia)
            {
                fileName = @"\australian.json";
            }
            else if (id == (int)EnumUtility.Country.Pakistan)
            {
                fileName = @"\pakistan.json";
            }
            else
            {
                fileName = @"\philippines.json";
            }
            var publicHolidayFile = $"{_serverServiceConfiguration.ServerPath}{filePathPublicHoliday}{fileName}";
            var jsonResult = File.ReadAllText(publicHolidayFile);
            var result = JsonConvert.DeserializeObject<PublicHoliday>(jsonResult);
            return result;
        }

        public List<UserDTO> GetTeamMembers()
        {
            var teamMemberDirectory = $"{_serverServiceConfiguration.ServerPath}{filePathTeamMember}";
            var jsonResult = File.ReadAllText(teamMemberDirectory);
            var result = JsonConvert.DeserializeObject<List<UserDTO>>(jsonResult);
            return result;

        }
    }
}
