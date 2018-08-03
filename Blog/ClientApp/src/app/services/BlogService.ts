import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { Site, MenuContentItem, Comment, KeyValuePair, AsyncResult, ContentItem } from '../model/model';
import { environment } from '../../environments/environment';


@Injectable({ providedIn:'root' })
export class BlogService {
  private serviceURL: string;

  constructor(private http: Http, private httpClient: HttpClient) {
    this.serviceURL = environment.API_URL;
  }

  GetActiveSites(): Observable<Site[]> {
    let url = this.serviceURL + 'GetActiveSites';
    return this.httpClient.get<Site[]>(this.noCache(url)).pipe(tap(_ => this.log(`GetActiveSites`)), catchError(this.handleError<Site[]>('GetActiveSites', [])));
  }

  GetContentItems(siteID: number, menuID: number, groupID: number, dateFilter: Date): Observable<ContentItem[]> {
    let stringDate = "";

    // date.tolocalString() leaves embeded chars that cause .net to fail when attempting to convert the date.
    if (dateFilter !== null)
      stringDate = dateFilter.getUTCFullYear() + '-' + (+dateFilter.getUTCMonth() + 1) + '-' + dateFilter.getUTCDate();

    let url = this.serviceURL + 'GetContentItems?siteID=' + siteID.toString() + '&menuID=' + menuID.toString() + '&groupID=' + groupID + '&dateFilter=' + stringDate;
    return this.httpClient.get<ContentItem[]>(this.noCache(url)).pipe(tap(_ => this.log(`GetContentItems`)), catchError(this.handleError<ContentItem[]>('GetContentItems', [])));
  }

  GetContentItemBySlug(slug: string, siteID: number): Observable<ContentItem> {
    let url = this.serviceURL + 'GetContentItemBySlug?slug=' + slug + '&siteID=' + siteID.toString();
    return this.httpClient.get<ContentItem>(this.noCache(url)).pipe(tap(_ => this.log(`GetContentItemBySlug`)), catchError(this.handleError<ContentItem>('GetContentItemBySlug', null)));
    //return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
    //.catch(this.handleError);
  }

  GetContentItemGroups(groupColumn: string, menuID: number): Observable<KeyValuePair[]> {
    let url = this.serviceURL + 'GetContentItemGroups?groupColumn=' + groupColumn + '&menuID=' + menuID.toString();
    return this.httpClient.get<KeyValuePair[]>(this.noCache(url)).pipe(tap(_ => this.log(`GetContentItemGroups`)), catchError(this.handleError<KeyValuePair[]>('GetContentItemGroups', [])));
    //return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
    //.catch(this.handleError);
  }

  GetPostHtml(url: string): Observable<string> {
    let headers = new Headers({ 'Content-Type': 'text/plain' });
    let options = new RequestOptions({ headers: headers });
    return this.httpClient.get<string>(this.noCache(url)).pipe(tap(_ => this.log(`GetPostHtml`)), catchError(this.handleError<string>('GetPostHtml', null)));
    //return this.http.get(this.noCache(url), options).pipe(map((x: Response) => { return x.text();  }));
      //.catch(this.handleError);
  }


  GetCommentsForContentItem(contentItemID: number): Observable<Comment[]> {
    let url = this.serviceURL + 'GetCommentsForContentItem?contentItemID=' + contentItemID.toString();
    return this.httpClient.get<Comment[]>(this.noCache(url)).pipe(tap(_ => this.log(`GetCommentsForContentItem`)), catchError(this.handleError<Comment[]>('GetCommentsForContentItem', [])));
    //return this.http.get(this.noCache(url)).pipe(map(response => this.extractData(response)));
    //  .catch(this.handleError);
  }

  SaveComment(comment: Comment, captchaCode: string): Observable<AsyncResult> {
    let url = this.serviceURL + 'SaveComment?captcha=' + captchaCode;
    let commentString = JSON.stringify(comment);
    let headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.post<AsyncResult>(this.noCache(url), commentString, headers); //.pipe(tap(_ => this.log(`SaveComment`)), catchError(this.handleError<AsyncResult>('SaveComment', null)));
    //return this.http.post(this.noCache(url), commentString, { headers: headers }).pipe(map(response => this.extractData(response)));
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }

  private xhandleError(error: any) {
    let errorMsg = error.message || 'Server error';
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

  private log(message: string) {

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
