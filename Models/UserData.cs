using System.ComponentModel.DataAnnotations;

namespace ServiceBuddy.Models
{
    public class UserData
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string EmailConfirmed { get; set; } = string.Empty;
        public string PasswordReset { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Token { get; set; } = string.Empty;
        public string TokenExpires { get; set; } = string.Empty;
        public string Created { get; set; } = string.Empty;
        public string Updated { get; set; } = string.Empty;
        public string Deleted { get; set; } = string.Empty;
        public int Active { get; set; } = 1;
        public int Blocked { get; set; } = 0;
        public int Removed { get; set; } = 0;
        public int RemovedExpires { get; set; } = 0;
        public string RemovedReason { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string State { get; set; } = string.Empty;
        public string Zip { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
    }
}
