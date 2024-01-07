import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaptoComponent } from './mapto.component';

describe('MaptoComponent', () => {
  let component: MaptoComponent;
  let fixture: ComponentFixture<MaptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
