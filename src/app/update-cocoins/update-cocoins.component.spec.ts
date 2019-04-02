import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCocoinsComponent } from './update-cocoins.component';

describe('UpdateCocoinsComponent', () => {
  let component: UpdateCocoinsComponent;
  let fixture: ComponentFixture<UpdateCocoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCocoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCocoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
