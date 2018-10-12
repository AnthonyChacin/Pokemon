import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDetalleComponent } from './box-detalle.component';

describe('BoxDetalleComponent', () => {
  let component: BoxDetalleComponent;
  let fixture: ComponentFixture<BoxDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
