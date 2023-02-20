import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginatePipe, PaginationService } from 'ngx-pagination';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

import { MensComponent } from './mens.component';

describe('MensComponent', () => {
  let component: MensComponent;
  let fixture: ComponentFixture<MensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensComponent,FilterPipe,PaginatePipe]
      ,providers:[HttpClient,HttpHandler,PaginationService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
