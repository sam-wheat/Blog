import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";
import { Site, Comment, KeyValuePair, AsyncResult, ContentItem } from '../model/model';
import { environment } from '../../environments/environment';
import { HttpErrorHandler, HandleError } from './HttpErrorHandler';


@Injectable({ providedIn: 'root' })
export class BlogService {
  private serviceURL: string;
  //private handleError: HandleError;

  constructor(private httpClient: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.serviceURL = environment.API_URL;
    //this.handleError = httpErrorHandler.createHandleError('BlogService');
  }

  GetActiveSites(): Observable<Site[]> {
    const url = this.serviceURL + 'GetActiveSites';
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
    // note that this.httpClient is not generic 
    return this.httpClient.get(this.noCache(url), { responseType: 'text' }).pipe(tap(_ => this.log(`GetPostHtml`)), catchError(this.handleError<string>('GetPostHtml', null)));
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
    return this.httpClient.post<AsyncResult>(this.noCache(url), commentString); //.pipe(tap(_ => this.log(`SaveComment`)), catchError(this.handleError<AsyncResult>('SaveComment', null)));
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
