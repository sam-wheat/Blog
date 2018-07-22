import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Site, MenuContentItem, Comment, KeyValuePair, AsyncResult, ContentItem } from '../model/model';
import { environment } from '../../environments/environment.prod';


@Injectable({ providedIn:'root' })
export class BlogService {
  private serviceURL: string;

  constructor(private http: Http) {
    this.serviceURL = environment.API_URL;
  }

  GetActiveSites(): Observable<Site[]> {
    let url = this.serviceURL + 'GetActiveSites';
    return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
      //.catch(this.handleError);
  }

  GetContentItems(siteID: number, menuID: number, groupID: number, dateFilter: Date): Observable<ContentItem[]> {
    let stringDate = "";

    // date.tolocalString() leaves embeded chars that cause .net to fail when attempting to convert the date.
    if (dateFilter !== null)
      stringDate = dateFilter.getUTCFullYear() + '-' + (+dateFilter.getUTCMonth() + 1) + '-' + dateFilter.getUTCDate();

    let url = this.serviceURL + 'GetContentItems?siteID=' + siteID.toString() + '&menuID=' + menuID.toString() + '&groupID=' + groupID + '&dateFilter=' + stringDate;
    return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
      //.catch(this.handleError);
  }

  GetContentItemBySlug(slug: string, siteID: number): Observable<ContentItem> {
    let url = this.serviceURL + 'GetContentItemBySlug?slug=' + slug + '&siteID=' + siteID.toString();
    return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
      //.catch(this.handleError);
  }

  GetContentItemGroups(groupColumn: string, menuID: number): Observable<KeyValuePair[]> {
    let url = this.serviceURL + 'GetContentItemGroups?groupColumn=' + groupColumn + '&menuID=' + menuID.toString();
    return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
      //.catch(this.handleError);
  }

  GetPostHtml(url: string): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'text/plain' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.noCache(url), options).pipe(map((x: Response) => {
      return x.text();
    }));
      //.catch(this.handleError);
  }


  GetCommentsForContentItem(contentItemID: number): Observable<Comment[]> {
    let url = this.serviceURL + 'GetCommentsForContentItem?contentItemID=' + contentItemID.toString();
    return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
    //  .catch(this.handleError);
  }

  SaveComment(comment: Comment, captchaCode: string): Observable<AsyncResult> {
    let url = this.serviceURL + 'SaveComment?captcha=' + captchaCode;
    let commentString = JSON.stringify(comment);
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this.noCache(url), commentString, { headers: headers }).pipe(map(response => this.extractData(response)));
      //.catch(this.handleError);
  }

  CaptchaImageURL(): string {
    return this.noCache(this.serviceURL + "GetCaptchaImage");
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || [];
  }

  private handleError(error: any) {
    let errorMsg = error.message || 'Server error';
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

  private noCache(url: string): string {
    if (url === null || typeof (url) === 'undefined')
      return null;

    if (url.slice(-1) === '/')
      url = url.slice(0, -1);

    let connector = url.lastIndexOf('?') > 0 ? '&' : '?';

    url = url + connector + 'noCache=' + (Math.random().toString().replace('.', ''));
    return url;
  }
  public DateToString(d: Date): string {
    if (d === null)
      return null;

    let result = '';

    result = (d.getUTCFullYear() + '-');

    if (d.getUTCMonth() < 9)
      result += '0' + (d.getUTCMonth() + 1) + '-';
    else
      result += (d.getUTCMonth() + 1) + '-';

    if (d.getUTCDate() < 10)
      result += '0' + d.getUTCDate();
    else
      result += d.getUTCDate();

    return result;

  }
}
