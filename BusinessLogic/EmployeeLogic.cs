using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using src.Model;

namespace src.BusinessLogic
{
    public class EmployeeLogic{
        private dev_evaluationContext _context;
        public EmployeeLogic(dev_evaluationContext context){
            _context = context;
        }
        public EmpMaster read(long id){
            return _context.EmpMaster.Include(e => e.EmpDetails).SingleOrDefault(e => e.EmpId == id);
        }
        public List<EmpMaster> list(){
            return _context.EmpMaster.Include(e => e.EmpDetails).ToList();
        }
        public EmpMaster add(EmpMaster emp){
            _context.EmpMaster.Add(emp);
            _context.SaveChanges();
            return emp;
        }
    }
}