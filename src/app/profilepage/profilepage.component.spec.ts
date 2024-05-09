import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepageComponent } from './profilepage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfilepageComponent', () => {
  let component: ProfilepageComponent;
  let fixture: ComponentFixture<ProfilepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ ProfilepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
