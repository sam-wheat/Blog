using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Blog.Services
{
    public static class ExtensionMethods
    {
        public static void AttachAsModified<T>(this Db db, T entity) where T:class
        {
            db.Attach(entity);
            db.Entry(entity).State = EntityState.Modified;
        }
    }
}
