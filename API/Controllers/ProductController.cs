using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")] // api/products
    [ApiController]
    public class ProductController(StoreContext context) : ControllerBase
    {
      [HttpGet]
      public async Task<ActionResult<List<Product>>> GetProducts()
      {
        return await context.Products.ToListAsync();
      }

      [HttpGet("{id}")]
      public async Task<ActionResult<Product>> getProductById(int id)
      {
        var FoundProduct = await context.Products.FindAsync(id);

        if(FoundProduct == null) return NotFound();
        
        return FoundProduct;
      }
    }
}
