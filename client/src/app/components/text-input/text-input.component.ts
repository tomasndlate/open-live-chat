import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

  inputId: string = `input-${Math.random().toString(36).slice(2, 9)}`;

  // Status - default | valid | invalid
  @Input() inputType: string = "text";
  @Input() inputDisabled: boolean = false;
  @Input() status: string = "";
  @Input() label: string = "";

  @Input() inputValue = "";
  @Output() inputValueChange = new EventEmitter<string>();
  @Output() inputDisabledChange = new EventEmitter<string>();

  handleInputChange(){
    this.inputValueChange.emit(this.inputValue);
  }

  handleInputDisabledChange(){
    this.inputDisabledChange.emit()
  }
}
