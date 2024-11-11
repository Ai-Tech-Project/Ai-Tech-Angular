import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescCertifComponent } from './desc-certif.component';

describe('DescCertifComponent', () => {
  let component: DescCertifComponent;
  let fixture: ComponentFixture<DescCertifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescCertifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
