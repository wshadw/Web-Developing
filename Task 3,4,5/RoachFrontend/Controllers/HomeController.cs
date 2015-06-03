using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using RoachFrontend.Models;
using RoachFrontend.Services;

namespace RoachFrontend.Controllers
{
    public class HomeController : Controller
    {
        private static UserSignIn userAdmin = new UserSignIn {Password = "admin", UserId = "admin" };
        private static UserSignIn userSignIn;
        //private static List<UserStat> statistics = new List<UserStat>();
        private static List<UserAcc> UserAccS = new List<UserAcc>();
        private static UserStat GetData = new UserStat();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            if (GetData.UserId != null)
            {
                ViewData["user"] = GetData.UserId;
                ViewData["money"] = GetData.Money;
            }
            else
            {
                ViewData["user"] = "";
                ViewData["money"] = 0;
            }
            return View();
        }

        public ActionResult Manage()
        {
            return View();
        }
        public ActionResult AddUserPage()
        {
            return View();
        }
        public ActionResult Stats()
        {
            //var data = JsonConvert.SerializeObject(new
            //{
            //    stats = statistics,
            //    success = true
            //});
            List<UserStat> statistics;
            using (var statSvc = new StatService(ConfigurationManager.ConnectionStrings["db"].ConnectionString))
            {
                statistics = statSvc.GetStatistics().ToList();
            }
            var data = JsonConvert.SerializeObject(new
            {
                stats = statistics,
                success = true
            });
            return Content(data);
        }
        public ActionResult LogOut()
        {
            userSignIn = null;
            return Content("OK");
        }
        public ActionResult MainPage()
        {
            try
            {
                if (userSignIn != null)
                {
                    ViewData["UserName"] = userSignIn.UserId;
                }
            }
            catch { }
            return View();
        }
        public ActionResult SaveStats(string data)
        {
            //var userStat = JsonConvert.DeserializeObject<UserStat>(data);
            //var indx = -1;
            //try{ indx = statistics.FindIndex(x => x.UserId == userStat.UserId);}
            //catch { indx=-1;}
            //if (indx != -1)
            //{
            //    userStat.Money += statistics[indx].Money;
            //    statistics[indx] = userStat;
            //}
            //else statistics.Add(userStat);
            var userStat = JsonConvert.DeserializeObject<UserStat>(data);
            using (var statSvc = new StatService(ConfigurationManager.ConnectionStrings["db"].ConnectionString))
            {
                statSvc.AddStat(userStat);
            }
            return Content("OK");
        }
        public ActionResult AddUser(string data)
        {
            var userAcc = JsonConvert.DeserializeObject<UserAcc>(data);
            UserAccS.Add(userAcc); //return Content("OK");
            using (var loginSvc = new LoginService(ConfigurationManager.ConnectionStrings["db"].ConnectionString))
            {
                loginSvc.AddUser(userAcc);
            }
            return Content("OK");
        }
        public ActionResult CheckUser(string data)
        {
            userSignIn = JsonConvert.DeserializeObject<UserSignIn>(data);
            if (userSignIn.Password == userAdmin.Password && userSignIn.UserId == userAdmin.UserId) return Content("OK");
            //var indx = -1;
            //try
            //{
            //    indx = UserAccS.FindIndex(x => x.Password == userSignIn.Password && x.UserId == userSignIn.UserId);
            //}
            //catch
            //{
            //    indx = -1;}
            //return Content(indx!=-1 ? "OK" : "NO");
            using (var loginSvc = new LoginService(ConfigurationManager.ConnectionStrings["db"].ConnectionString))
            {
                return Content(loginSvc.CheckUser(userSignIn) ? "OK" : "NO");
            }
        }
        public ActionResult GetUserMoney(string data)
        {
            GetData = JsonConvert.DeserializeObject<UserStat>(data);
            return Content("OK");
        }
    }
}