using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace src.Model
{
    public partial class EmpMaster
    {
        [Key]
        [ForeignKey("EmpDetails")]
        public long EmpId { get; set; }
        public long EmpCode { get; set; }
        public string EmpName { get; set; }
        public EmpDetails EmpDetails { get; set; }
    }
}
