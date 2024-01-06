import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakelastoperaterComponent } from './takelastoperater.component';

describe('TakelastoperaterComponent', () => {
  let component: TakelastoperaterComponent;
  let fixture: ComponentFixture<TakelastoperaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakelastoperaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakelastoperaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
