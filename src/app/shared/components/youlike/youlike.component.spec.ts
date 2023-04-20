import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoulikeComponent } from './youlike.component';

describe('YoulikeComponent', () => {
  let component: YoulikeComponent;
  let fixture: ComponentFixture<YoulikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoulikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoulikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
