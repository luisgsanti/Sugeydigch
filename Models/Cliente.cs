using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Sugeydigch.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        
        [Required] public string Identificacion { get; set; }
        [Required] public string Nombre { get; set; }
        [Required] public string Apelido { get; set; }
        [Required] public string Genero { get; set; }
        [Required] public string FechaNacimiento { get; set; }
        public int Telefono { get; set; }
        public string Correo { get; set; }
    }
}