using System.Linq;
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
            var emp = _context.EmpMaster.Include(e => e.EmpDetails).SingleOrDefault(e => e.EmpId == id);
            return emp;
        }
    }
}