using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_ReactJS.Models
{
    public class Province
    {
        public int Id { get; set; }
        public string name { get; set; }
        public ICollection<City> Cities { get; set; }
    }
}
