using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Blog.Services.Integration
{
    public class DropAndRecreateInitializer
    {
        private MyDbContextOptions _options;
        private Db _db;

        public DropAndRecreateInitializer(MyDbContextOptions options)
        {
            _options = options;
            _db = new Db(_options);
        }

        public void DropAndRecreateDb()
        {
            _db.Database.EnsureDeleted();
            _db.SaveChanges();
            EnsureCreated();
        }

        public void EnsureCreated()
        {
            _db.Database.EnsureCreated();
            _db.SaveChanges();
        }
    }
}
