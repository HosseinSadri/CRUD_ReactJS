using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_ReactJS.Models
{
    public class ProductBrand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Product> products { get; set; }

    }
}
