using System;

namespace Blog.API.Response
{
    public class ProductCommentResponse
    {
        public int ProductCommentId { get; set; }

        public string Comment { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
    }
}