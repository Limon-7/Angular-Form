using System;
using System.ComponentModel.DataAnnotations;

namespace Blog.API.Persistence.Entities
{
    public class Product
    {
        [Key] public int ProductId { get; set; }

        public string ProductName { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
        public int BrandId { get; set; }
        public Brand Brand { get; set; }
    }
}