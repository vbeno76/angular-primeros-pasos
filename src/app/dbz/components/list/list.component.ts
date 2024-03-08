import { Character } from '../../interfaces/character.interface';
import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-list',
  styleUrl: './list.component.css',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList: Character[] =
    [
      { name: 'Trucks', power: 10 }
    ]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
