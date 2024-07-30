import { Component, Input } from '@angular/core';
import { MenuItem } from '../list.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input({required: true}) menuItem!: MenuItem;
  toggle: boolean = false;
  expression : '+' | '-' = '+';
  onToggle(){
    this.toggle =!this.toggle;
    this.expression = this.toggle ? '-' : '+';

  }

}


