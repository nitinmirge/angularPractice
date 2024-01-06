import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiplastComponent } from './skiplast.component';

describe('SkiplastComponent', () => {
  let component: SkiplastComponent;
  let fixture: ComponentFixture<SkiplastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiplastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiplastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
