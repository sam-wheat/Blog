import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
declare var hljs: any;

if (typeof process !== 'undefined' && process.env.ENV === 'prod')
    enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
hljs.initHighlightingOnLoad();