import { Component, OnInit } from '@angular/core';
import { State, Employee, TheService } from '../Services/the.service';

@Component({
  selector: 'app-grid-with-complexe-data-type',
  templateUrl: './grid-with-complexe-data-type.component.html',
  styleUrls: ['./grid-with-complexe-data-type.component.css'],
  providers: [TheService]
})
export class GridWithComplexeDataTypeComponent implements OnInit {

  dataSource: Employee[];
  states: State[];
  tab: string[];

  constructor(service: TheService) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
    this.tab = [];
}

  onEditorPreparing(e) {
      if (e.parentType === 'dataRow') {
          this.tab.push(e.dataField);
      }
  }

  setCellValue(newData, value, currentRowData) {
    if (!newData.FilterPosition) {
      newData.FilterPosition = {};
    }
    newData.FilterPosition.value = value;
    newData.FilterPosition.additionalValue = `XXX ${value} XXX`;
  }

  onFilterPositionChanged(e, setValueMethod) {
    if (setValueMethod && e.value !== e.previousValue) {
      setValueMethod(e.value);
    }
  }

  ngOnInit() {
  }

}
