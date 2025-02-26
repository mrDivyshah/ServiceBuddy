using System.ComponentModel.DataAnnotations;

namespace ServiceBuddy.Models
{
    public class serviceTable
    {
        [Key]
        public int sid {  get; set; }
        public string service_title { get; set; }
        public string desc { get; set; }
    }
}
