import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;
  let service: SearchbarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ SearchbarComponent ],
      providers: [SearchbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have searchUser function', inject([SearchbarComponent], (service: SearchbarComponent) => {
    expect(service.searchUser).toBeTruthy();
   }));

});
