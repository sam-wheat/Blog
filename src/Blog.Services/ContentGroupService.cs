﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Blog.Core;
using Blog.Domain;
using Blog.Model;

namespace Blog.Services
{
    public class ContentGroupService : BaseService, IContentGroupService
    {
        public ContentGroupService(MyDbContextOptions options) : base(options)
        {

        }

        public async Task<List<ContentGroup>> GetContentGroupsForSite(int siteID)
        {
            return await db.ContentGroups.Where(x => x.SiteID == siteID).OrderBy(x => x.Sequence).ToListAsync();
        }

        public async Task<AsyncResult> SaveContentGroup(ContentGroup contentGroup)
        {
            AsyncResult result = new AsyncResult();

            if (String.IsNullOrEmpty(contentGroup.Description))
                result.ErrorMessage = "Content group description is required.";
            else if (!db.Sites.Any(x => x.ID == contentGroup.SiteID))
                result.ErrorMessage = "Invalid Site ID.";

            if (!String.IsNullOrEmpty(result.ErrorMessage))
                return result;


            if (contentGroup.ID == 0)
            {
                ContentGroup last = db.ContentGroups.OrderBy(x => x.Sequence).LastOrDefault(x => x.SiteID == contentGroup.SiteID);
                contentGroup.Sequence =  last == null ? 1 : last.Sequence + 1;
                db.ContentGroups.Add(contentGroup);
            }
            else
                db.AttachAsModified(contentGroup);

            await db.SaveChangesAsync();
            result.Success = true;
            return result;
        }
    }
}
