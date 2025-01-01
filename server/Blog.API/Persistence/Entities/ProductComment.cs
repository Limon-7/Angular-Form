using System;
using System.ComponentModel.DataAnnotations;

namespace Blog.API.Persistence.Entities
{
    public class ProductComment
    {
        [Key] public int ProductCommentId { get; set; }

        public string Comment { get; set; }
        public int ProductId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime LastModifiedAt { get; set; }
    }
}