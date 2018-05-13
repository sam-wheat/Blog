﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Blog.Core;
using Blog.Domain;
using Blog.Services.Database;

namespace Blog.Services
{
    public class BaseService : IDisposable
    {
        protected ICacheCollection Cache;
        protected IServiceManifest ServiceManifest;
        protected Db db;
        
        public BaseService(Db db, IServiceManifest serviceManifest, ICacheCollection cache)
        {
            this.db = db;
            this.ServiceManifest = serviceManifest;
            this.Cache = cache;
        }


        #region IDisposable
        private bool disposed;

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    disposed = true;
                    db.Dispose();
                }
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        #endregion
    }
}
