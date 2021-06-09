import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACTComponent } from './contact.component';

describe('CONTACTComponent', () => {
  let component: CONTACTComponent;
  let fixture: ComponentFixture<CONTACTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CONTACTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CONTACTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
