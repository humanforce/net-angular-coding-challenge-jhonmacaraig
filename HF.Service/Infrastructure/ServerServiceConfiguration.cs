using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF.Service.Infrastructure
{
    public interface IServerServiceConfiguration
    {
        public string ServerPath { get;}
    }
    public class ServerServiceConfiguration : IServerServiceConfiguration
    {
        private readonly string _serverPath ;
        public ServerServiceConfiguration(string serverPath)
        {
            _serverPath = serverPath;
        }
        public string ServerPath
        {
            get
            {
                return _serverPath;
            }
        }
    }
}
