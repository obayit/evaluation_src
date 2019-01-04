using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace src.Model
{
    public partial class dev_evaluationContext : DbContext
    {
        public dev_evaluationContext()
        {
        }

        public dev_evaluationContext(DbContextOptions<dev_evaluationContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmpDetails> EmpDetails { get; set; }
        public virtual DbSet<EmpMaster> EmpMaster { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=dev_evaluation;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<EmpDetails>(entity =>
            {
                entity.HasKey(e => e.EmpId);

                entity.ToTable("Emp_Details");

                entity.Property(e => e.EmpId)
                    .HasColumnName("Emp_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.BlockNo).HasColumnName("Block_No");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HouseNo).HasColumnName("House_No");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Street)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<EmpMaster>(entity =>
            {
                entity.HasKey(e => e.EmpId);

                entity.ToTable("Emp_Master");

                entity.Property(e => e.EmpId)
                    .HasColumnName("Emp_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.EmpCode).HasColumnName("Emp_Code");

                entity.Property(e => e.EmpName)
                    .IsRequired()
                    .HasColumnName("Emp_Name")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
