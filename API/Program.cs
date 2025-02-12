using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext> ( opt => 
    {
    opt.UseSqlite(builder.Configuration.GetConnectionString("defaultConnection"));
    });
builder.Services.AddCors();

var app = builder.Build();

app.UseCors(opt => {
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:5173");
});

app.MapControllers();

DbInitializer.InitDb(app);



app.Run();
