import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { _ProxyConfig, ProxyConfig } from '../models/proxy-config';

export class HttpProxyInterceptor implements HttpInterceptor {

    constructor(@Inject(ProxyConfig) private config: _ProxyConfig) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.indexOf('http://') === -1 && req.url.indexOf('https://') === -1) {
            const dupReq = req.clone({
                url: this.config.basePath + req.url
            });
            return next.handle(dupReq);
        }
        return next.handle(req);
    }

}