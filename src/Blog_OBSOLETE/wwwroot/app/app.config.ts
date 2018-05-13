import { Injectable  } from '@angular/core';
@Injectable()

export class AppConfig
{
    public get API_URL(): string {
        var url = "http://localhost:53389/api/Blog/";
        //var url = "https://localhost:44311/api/Blog/";

        if (typeof process !== 'undefined')
        {
            console.log('process.env.ENV is ' + process.env.ENV);

            if (process.env.ENV === 'prod') {
                url = "http://www.samwheat.com/api/api/Blog/";
            }
        }
        else
            console.log('process.env.ENV is undefined');
        return url;
    }
}