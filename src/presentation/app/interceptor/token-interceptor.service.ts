import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor() {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addToken(req));
  }

  public addToken(request: HttpRequest<any>) {
    if (request.url.startsWith('/api/login')) {
      return request;
    }

    const token = localStorage.getItem('token') || '';

    return request.clone({
      setHeaders: {
        'x-token': token
      }
    });
  }
}
