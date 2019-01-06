using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_ReactJS.Models
{
    public class ProductList
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public int Count { get; set; }
        public string Brand { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
    }
}
