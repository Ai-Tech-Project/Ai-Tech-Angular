import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCertifComponent } from './result-certif.component';

describe('ResultCertifComponent', () => {
  let component: ResultCertifComponent;
  let fixture: ComponentFixture<ResultCertifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultCertifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
