﻿using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(task_v2.Startup))]
namespace task_v2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
