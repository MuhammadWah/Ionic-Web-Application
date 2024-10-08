import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UserDetailsPage } from './user-details.page';

describe('UserDetailsPage', () => {
  let component: UserDetailsPage;
  let fixture: ComponentFixture<UserDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsPage],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(UserDetailsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
