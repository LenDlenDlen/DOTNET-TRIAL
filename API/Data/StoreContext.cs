using System;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
// use 'ctor' for the starter snippet (just type it in)
public class StoreContext(DbContextOptions options) : DbContext(options)
{
    public required DbSet<Product> Products{ get; set; }
}
