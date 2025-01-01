using System;
using Blog.API.Persistence.Entities;

namespace Blog.API.Response
{
    public class ProductResponse
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
        public int BrandId { get; set; }
        public string BrandName { get; set; }
    }
}