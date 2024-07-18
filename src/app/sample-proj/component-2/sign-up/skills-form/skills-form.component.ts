import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rk-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent {
  @Input() form: FormGroup;
  @Input() enableDelete: boolean;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(null);
  }
}
