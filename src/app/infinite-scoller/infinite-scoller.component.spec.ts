import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScollerComponent } from './infinite-scoller.component';

describe('InfiniteScollerComponent', () => {
  let component: InfiniteScollerComponent;
  let fixture: ComponentFixture<InfiniteScollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteScollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
