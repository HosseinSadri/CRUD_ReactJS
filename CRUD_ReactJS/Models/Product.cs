using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_ReactJS.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Count { get; set; }
        public ICollection<ProductImage> productImages { get; set; }
        public int Brand_Id { get; set; }
        [ForeignKey("Brand_Id")]
        public ProductBrand productBrand { get; set; }
        public int City_Id { get; set; }
        [ForeignKey("City_Id")]
        public City city { get; set; }

    }
}
