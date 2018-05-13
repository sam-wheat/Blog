using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Core
{
    public static class EndPointType
    {
        public const string InProcess = "InProcess";        // Database: SQL Server, MySQL, SQLite, etc.
        public const string HTTP = "HTTP";                  // REST, WCF, etc.
        public const string ESB = "ESB";                    // Enterprise Service Bus - MSMQ, Rabbit, etc
        public const string File = "File";                  // Operating System File
        public const string FTP = "FTP";                    // File Transfer Protocol
    }
}
