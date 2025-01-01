using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Blog.API.Persistence.Entities
{
    public class Brand
    {
        public Brand()
        {
            var Products = new HashSet<Product>();
        }

        [Key] public int BrandId { get; set; }

        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}