using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Model
{
    public class Menu
    {
        public int ID { get; set; }
        public int SiteID { get; set; }
        public string MenuName { get; set; }

        public virtual Site Site { get; set; }
        public virtual ICollection<MenuContentItem> MenuContentItems { get; set; }
    }
}
