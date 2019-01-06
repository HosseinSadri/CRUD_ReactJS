using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_ReactJS.Models
{
    public class ProductInsert
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public int Count { get; set; }
        public List<IFormFile> Image { get; set; }
        public int CityId { get; set; }
        public string Brand { get; set; }
    }
}
