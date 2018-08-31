using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace my_new_app.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<SkuItem> WeatherForecasts()
        {
            var list = new List<SkuItem>()
            {
                new SkuItem
                {
                    SkuDesc = "dsdsad",
                    SkuName = "sdafssa",
                    SkuPrice = 23,
                    SkuOfferPrice = 54
                },
                new SkuItem
                {
                    SkuDesc = "dsdsad",
                    SkuName = "sdafssa",
                    SkuPrice = 23,
                    SkuOfferPrice = 54
                },
                new SkuItem
                {
                    SkuDesc = "dsdsad",
                    SkuName = "sdafssa",
                    SkuPrice = 23,
                    SkuOfferPrice = 54
                },
                new SkuItem
                {
                    SkuDesc = "dsdsad",
                    SkuName = "sdafssa",
                    SkuPrice = 23,
                    SkuOfferPrice = 54
                },
                new SkuItem
                {
                    SkuDesc = "dsdsad",
                    SkuName = "sdafssa",
                    SkuPrice = 23,
                    SkuOfferPrice = 54
                },
                new SkuItem
                {
                    SkuDesc = "dsdsad",
                    SkuName = "sdafssa",
                    SkuPrice = 23,
                    SkuOfferPrice = 54
                },
                new SkuItem
                {
                    SkuDesc = "dsdsad",
                    SkuName = "sdafssa",
                    SkuPrice = 23,
                    SkuOfferPrice = 54
                }
            };

            return list;
        }

        public class SkuItem
        {
            public string SkuName { get; set; }
            public int SkuPrice { get; set; }
            public string SkuDesc { get; set; }
            public int SkuOfferPrice { get; set; }
        }
    }
}