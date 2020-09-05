import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramPageComponent } from './launch-program-page.component';

describe('LaunchProgramPageComponent', () => {
  let component: LaunchProgramPageComponent;
  let fixture: ComponentFixture<LaunchProgramPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchProgramPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
