import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageModalComponent } from './register-page-modal.component';

describe('RegisterPageModalComponent', () => {
  let component: RegisterPageModalComponent;
  let fixture: ComponentFixture<RegisterPageModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPageModalComponent]
    });
    fixture = TestBed.createComponent(RegisterPageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
