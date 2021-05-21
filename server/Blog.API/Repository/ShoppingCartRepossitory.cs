using Blog.API.Persistence.Context;
using Blog.API.Persistence.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.API.Repository
{
    public interface IShoppingCartRepossitory
    {
        IEnumerable<ShoppingItem> GetAllItems();
        Task<ShoppingItem> Add(ShoppingItem newItem);
        ShoppingItem GetById(Guid id);
        void Remove(Guid id);
    }
    public class ShoppingCartRepossitory : IShoppingCartRepossitory
    {
        private readonly List<ShoppingItem> _shoppingCart;
        private readonly ApplicationDbContext _context;

        public ShoppingCartRepossitory(ApplicationDbContext context)
        {
            _context = context;
            _shoppingCart = new List<ShoppingItem>()
            {
                new ShoppingItem() { Id = new Guid("ab2bd817-98cd-4cf3-a80a-53ea0cd9c200"),
                    Name = "Orange Juice", Manufacturer="Orange Tree", Price = 5.00M },
                new ShoppingItem() { Id = new Guid("815accac-fd5b-478a-a9d6-f171a2f6ae7f"),
                    Name = "Diary Milk", Manufacturer="Cow", Price = 4.00M },
                new ShoppingItem() { Id = new Guid("33704c4a-5b87-464c-bfb6-51971b4d18ad"),
                    Name = "Frozen Pizza", Manufacturer="Uncle Mickey", Price = 12.00M }
            };
            _context.AddRangeAsync(_shoppingCart);
            _context.SaveChangesAsync();

        }
        public IEnumerable<ShoppingItem> GetAllItems()
        {

            return _context.ShoppingItems.ToList();
        }
        public async Task<ShoppingItem> Add(ShoppingItem newItem)
        {
            newItem.Id = Guid.NewGuid();
            var item = new ShoppingItem
            {
                Name = newItem.Name,
                Price = newItem.Price,
                Manufacturer = newItem.Manufacturer
            };
            _context.ShoppingItems.Add(item);
            await _context.SaveChangesAsync();
            var itemToget = GetById(item.Id);
            return itemToget;
        }
        public ShoppingItem GetById(Guid id)
        {
            return _context.ShoppingItems.Where(a => a.Id == id)
                .FirstOrDefault();
        }
        public void Remove(Guid id)
        {
            var existing = _context.ShoppingItems.First(a => a.Id == id);
            _context.Remove(existing);
            _context.SaveChanges();
        }
    }
}
