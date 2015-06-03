using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace RoachFrontend.Models
{
    [JsonObject]
    public class UserStat
    {
        [JsonProperty("user")]
        public string UserId { get; set; }

        [JsonProperty("money")]
        public int Money { get; set; }
    }
    [JsonObject]
    public class UserSignIn
    {
        [JsonProperty("user")]
        public string UserId { get; set; }

        [JsonProperty("password")]
        public string Password { get; set; }
    }
    [JsonObject]
    public class UserAcc
    {
        [JsonProperty("user")]
        public string UserId { get; set; }

        [JsonProperty("password")]
        public string Password { get; set; }
        [JsonProperty("email")]
        public string Email { get; set; }
    }
}