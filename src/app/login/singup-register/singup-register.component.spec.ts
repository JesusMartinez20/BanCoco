import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupRegisterComponent } from './singup-register.component';

describe('SingupRegisterComponent', () => {
  let component: SingupRegisterComponent;
  let fixture: ComponentFixture<SingupRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingupRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
