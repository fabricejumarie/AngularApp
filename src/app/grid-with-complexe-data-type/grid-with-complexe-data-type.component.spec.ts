import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWithComplexeDataTypeComponent } from './grid-with-complexe-data-type.component';

describe('GridWithComplexeDataTypeComponent', () => {
  let component: GridWithComplexeDataTypeComponent;
  let fixture: ComponentFixture<GridWithComplexeDataTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridWithComplexeDataTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWithComplexeDataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
