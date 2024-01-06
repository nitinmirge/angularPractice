import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeoperaterComponent } from './takeoperater.component';

describe('TakeoperaterComponent', () => {
  let component: TakeoperaterComponent;
  let fixture: ComponentFixture<TakeoperaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeoperaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeoperaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
