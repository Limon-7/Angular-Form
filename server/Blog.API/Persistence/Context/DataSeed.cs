using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.API.Persistence.Entities;

namespace Blog.API.Persistence.Context
{
    public static class DataSeed
    {
        public static async Task InitializeDataSeed(ApplicationDbContext context)
        {
            if (!context.Brands.Any())
            {
                var brands = new List<Brand>
                {
                    new() { BrandId = 1, Name = "Brand A", CreatedAt = DateTime.Now, LastModifiedAt = DateTime.Now },
                    new() { BrandId = 2, Name = "Brand B", CreatedAt = DateTime.Now, LastModifiedAt = DateTime.Now },
                    new() { BrandId = 3, Name = "Brand C", CreatedAt = DateTime.Now, LastModifiedAt = DateTime.Now },
                    new() { BrandId = 4, Name = "Brand D", CreatedAt = DateTime.Now, LastModifiedAt = DateTime.Now },
                    new() { BrandId = 5, Name = "Brand E", CreatedAt = DateTime.Now, LastModifiedAt = DateTime.Now }
                };
                context.Brands.AddRange(brands);
                await context.SaveChangesAsync();
            }

            if (!context.Products.Any())
            {
                var products = new List<Product>
                {
                    new() { ProductId = 1, ProductName = "Product 1", Price = 120, BrandId = 1 },
                    new() { ProductId = 2, ProductName = "Product 2", Price = 200, BrandId = 2 },
                    new() { ProductId = 3, ProductName = "Product 3", Price = 300, BrandId = 3 },
                    new() { ProductId = 4, ProductName = "Product 4", Price = 400, BrandId = 4 },
                    new() { ProductId = 5, ProductName = "Product 5", Price = 500, BrandId = 5 }
                };

                context.Products.AddRange(products);
                await context.SaveChangesAsync();
            }

            if (!context.ProductComments.Any())
            {
                var productComments = new List<ProductComment>
                {
                    new()
                    {
                        ProductCommentId = 1, Comment = "Great product!", ProductId = 1, CreatedAt = DateTime.Now,
                        LastModifiedAt = DateTime.Now
                    },
                    new()
                    {
                        ProductCommentId = 2, Comment = "Needs improvement.", ProductId = 2, CreatedAt = DateTime.Now,
                        LastModifiedAt = DateTime.Now
                    },
                    new()
                    {
                        ProductCommentId = 3, Comment = "Value for money.", ProductId = 3, CreatedAt = DateTime.Now,
                        LastModifiedAt = DateTime.Now
                    },
                    new()
                    {
                        ProductCommentId = 4, Comment = "Highly recommended.", ProductId = 4, CreatedAt = DateTime.Now,
                        LastModifiedAt = DateTime.Now
                    },
                    new()
                    {
                        ProductCommentId = 5, Comment = "Not satisfied.", ProductId = 5, CreatedAt = DateTime.Now,
                        LastModifiedAt = DateTime.Now
                    }
                };
                context.ProductComments.AddRange(productComments);
                await context.SaveChangesAsync();
            }
        }
    }
}