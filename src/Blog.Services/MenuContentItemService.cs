using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blog.Core;
using Blog.Domain;
using Blog.Model;

namespace Blog.Services
{
    public class MenuContentItemService : BaseService, IMenuContentItemService
    {
        public MenuContentItemService(MyDbContextOptions options) : base(options)
        {

        }

        public async Task<AsyncResult> SaveMenuContentItem(MenuContentItem mci)
        {
            AsyncResult<MenuContentItem> result = new AsyncResult<MenuContentItem>();

            if (mci.ID == 0)
                db.MenuContentItems.Add(mci);
            else
                db.AttachAsModified(mci);

            await db.SaveChangesAsync();
            result.Success = true;
            return result;
        }
    }
}
