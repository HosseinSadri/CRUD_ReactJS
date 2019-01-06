using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_ReactJS.Models
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Province_Id { get; set; }
        [ForeignKey("Province_Id")]
        public Province province { get; set; }
    }
}
