import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchProgramContentComponent } from './launch-program-content.component';

describe('LaunchProgramContentComponent', () => {
  let component: LaunchProgramContentComponent;
  let fixture: ComponentFixture<LaunchProgramContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchProgramContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchProgramContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
