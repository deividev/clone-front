import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../components/login/login.component';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: WebStorageService, useExisting: LOCAL_STORAGE },
      ],
      imports: [
        RouterTestingModule.withRoutes([{
          path: 'login',
          component: LoginComponent
        }])
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });
    guard = TestBed.inject(AuthGuard)
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
