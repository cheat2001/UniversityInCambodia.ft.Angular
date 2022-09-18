import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuppComponent } from './rupp.component';

describe('RuppComponent', () => {
  let component: RuppComponent;
  let fixture: ComponentFixture<RuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
