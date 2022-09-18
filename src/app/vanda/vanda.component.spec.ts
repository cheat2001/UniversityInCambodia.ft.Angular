import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VandaComponent } from './vanda.component';

describe('VandaComponent', () => {
  let component: VandaComponent;
  let fixture: ComponentFixture<VandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
