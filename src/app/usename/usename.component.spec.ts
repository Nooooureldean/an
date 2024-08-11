import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsenameComponent } from './usename.component';

describe('UsenameComponent', () => {
  let component: UsenameComponent;
  let fixture: ComponentFixture<UsenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsenameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
