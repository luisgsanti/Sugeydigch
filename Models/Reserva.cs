using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace Sugeydigch.Models
{
    public class Reserva
    {
        public int Id { get; set; }

        [Required] public string IdCliente { get; set; }
        [Required] public string FechaIngreso { get; set; }
        [Required] public string FechaSalida { get; set; }
        [Required] public string Habitaciones { get; set; }
        //[Required] public int DiasEstadia { get; set; }
        [Required] public string Estado { get; set; }
    }
}