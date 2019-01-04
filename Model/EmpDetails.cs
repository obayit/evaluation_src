using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace src.Model
{
    public partial class EmpDetails
    {
        [Key]
        public long EmpId { get; set; }
        public int HouseNo { get; set; }
        public int BlockNo { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public long Phone { get; set; }
        public string Email { get; set; }
    }
}
