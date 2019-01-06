using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_ReactJS.Models
{
    public class ProductImage
    {
        public int Id { get; set; }
        public byte[] Image { get; set; }
        public int Product_Id { get; set; }
        [ForeignKey("Product_Id")]
        public Product product { get; set; }
    }
}
