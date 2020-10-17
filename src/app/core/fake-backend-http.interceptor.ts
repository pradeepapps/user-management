import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User } from '../user/user';


const FAKE_USERS: Array <User> = [
  {
    id: 1,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 2,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 3,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 4,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 5,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 6,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 7,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 8,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 9,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 10,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 11,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 12,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 13,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 14,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 15,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 16,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 17,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 18,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 19,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 20,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 21,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 22,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 23,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 24,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 25,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 26,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 28,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 29,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 30,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 31,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 32,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 33,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 34,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 35,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 36,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 37,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 38,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 39,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 40,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 41,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 42,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 43,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 44,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 45,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 46,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 47,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 48,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 49,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 50,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 51,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 52,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 53,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 54,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 55,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 56,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 57,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 58,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 59,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 60,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 61,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 62,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 63,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 64,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 65,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 66,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 67,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 68,
    name: 'John',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 69,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  },
  {
    id: 70,
    name: 'Kate',
    age: 27,
    dob: '27/09/2020'
  }
];

// array in local storage for registered users
const USERS = JSON.parse(localStorage.getItem('users')) || FAKE_USERS;

@Injectable()
export class FakeBackendHttpInterceptor implements HttpInterceptor {

  constructor() {
    const users = localStorage.getItem('users');
    if (!users) {
      localStorage.setItem('users', JSON.stringify(FAKE_USERS));
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/user') && method === 'POST':
          return register();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        default:
          return next.handle(request);
      }
    }

    // route functions

    function register() {
      const user = body;
      user.id = USERS.length;
      USERS.push(user);
      localStorage.setItem('users', JSON.stringify(USERS));
      return ok(user);
    }

    function getUsers() {
      return ok(USERS);
    }

    // helper functions

    function ok(resBody?) {
      return of(new HttpResponse({ status: 200, body: resBody }));
    }

    function error(message) {
        return throwError({ error: { message } });
    }
  }
}

export const fakeBackendHttpInterceptor = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendHttpInterceptor,
  multi: true
};
