import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-auto-completion-text-area',
  templateUrl: './auto-completion-text-area.component.html',
  styleUrls: ['./auto-completion-text-area.component.css']
})
export class AutoCompletionTextAreaComponent implements OnInit {

  txtValue: string;

  constructor() { }

  ngOnInit() {
  }

  onKeyDown(e, txtArea) {
    const cursorPosition = txtArea.selectionStart;

    switch (e.key) {
      case '{':
      this.autoCompleteClosableChar('}', cursorPosition, txtArea);
      break;
      case '(':
      this.autoCompleteClosableChar(')', cursorPosition, txtArea);
      break;
      case '\'':
      this.autoCompleteClosableChar('\'', cursorPosition, txtArea);
      break;
      case '"':
      this.autoCompleteClosableChar('"', cursorPosition, txtArea);
      break;
      case '[':
      this.autoCompleteClosableChar(']', cursorPosition, txtArea);
      break;
    }
  }

  private autoCompleteClosableChar(closingChar: string, cursorPosition: number, txtArea) {
    if (txtArea.value.length > cursorPosition && txtArea.value[cursorPosition] === closingChar) {
      return;
    }
    const value = txtArea.value;
    txtArea.value = value.slice(0, cursorPosition) + closingChar + value.slice(cursorPosition);
    txtArea.setSelectionRange(cursorPosition, cursorPosition);
  }

}
