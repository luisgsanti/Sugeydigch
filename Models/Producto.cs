using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Sugeydigch.Models
{
    public class Producto
    {
        public int Id { get; set; }
        [Required] public string NombreProdcuto { get; set; }
        [Required] public decimal Precio { get; set; }
    }
}