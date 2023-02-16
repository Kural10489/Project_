import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

import { WomenComponent } from './women.component';

describe('WomenComponent', () => {
  let component: WomenComponent;
  let fixture: ComponentFixture<WomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenComponent,FilterPipe ]
      ,providers:[HttpClient,HttpHandler],
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
