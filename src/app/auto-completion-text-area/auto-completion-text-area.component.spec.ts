import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompletionTextAreaComponent } from './auto-completion-text-area.component';

describe('AutoCompletionTextAreaComponent', () => {
  let component: AutoCompletionTextAreaComponent;
  let fixture: ComponentFixture<AutoCompletionTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompletionTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompletionTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
