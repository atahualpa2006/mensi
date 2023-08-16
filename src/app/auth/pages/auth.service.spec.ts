import { UserFormDialogComponent } from './../../dashboard/pages/users/components/user-form-dialog/user-form-dialog.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth.services';
import { User } from 'src/app/dashboard/pages/users/models';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/core/mocks/router.mock';
import { MockProvider } from 'ng-mocks';





describe ('AuthService', () => {

  let service : AuthService;
  let httpControler : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule ({

      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        // {
        //   provide: Router,
        //   useClass: RouterMock,
        // }

        MockProvider(Router)
      ]
    })

    service = TestBed.inject(AuthService);
    httpControler = TestBed.inject(HttpTestingController);

  })

  afterEach(() => {
    httpControler.verify();
  })

  it('Si el login() es valido el observable authUser$ debe emitir un valor ', (done) => {

    const mockUser: User = {
      id: 1,
      email:'falso@gmail.com',
      password: '1234567',
      name:'FALSO',
      surname: "USER,",
      token:'dlknwodfhweouñhnlcjk',
    }

    const mockResponse: User[] = [mockUser];

    service.login({
      email: mockUser.email,
      password: mockUser.password


    });

    httpControler.expectOne({

      method: 'GET',
      url:`http://localhost:3000/users?email=${mockUser.email}&password=${mockUser.password}`
    }).flush (mockResponse)



    service.authUser$.subscribe({
      next:(authUser) => {
        expect (authUser).toBeTruthy();
        expect (authUser).toEqual(mockUser);
        done()
      }
    })

  } )


})
