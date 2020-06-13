using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Sugeydigch.Models;

namespace Sugeydigch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductoController  : ControllerBase
    {
        private readonly SugeContext _context;

        public ProductoController(SugeContext context)
        {
            _context = context;
            
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetTaskItems()
        {
        return await _context.Productos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Producto>>> GetTaskItem(int id)
        {
            return await _context.Productos.Where(p=>p.Id==id).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Producto>> PostTaskItem(Producto item)
        {
            _context.Productos.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Id }, item);
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Producto item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItem(int id)
        {
            var Producto = await
            _context.Productos.FindAsync(id);
            if (Producto == null)
            {
                return NotFound();
            }
            _context.Productos.Remove(Producto);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}