import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService} from './../services/BlogService';
import { SessionService} from './../services/SessionService';
import { ContentItem } from '../model/model';
import { CommentList } from '../comments/commentList';

@Component({
    selector: 'blog-contact',
    templateUrl: './app/contact/contact.html',
    styles: [':host { display:flex;flex-flow:column;height:100%; }']
})

export class Contact implements OnInit, OnDestroy {

    constructor() {
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}