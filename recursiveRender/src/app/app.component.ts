import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './list.model';
import { ListComponent } from "./list/list.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recursiveRender';
  menuList: MenuItem[] =[
    {
      name: 'Item 1',
      child: [
        {
          name: 'Item 1.1',
          child: [
            { name: 'Item 1.1.1', child: [] },
            { name: 'Item 1.1.2', child: [] },
            {
              name: 'Item 1.1.3',
              child: [{ name: 'Item 1.1.3.1', child: [] }],
            },
            {
              name: 'Item 1.1.4',
              child: [
                { name: 'Item 1.1.4.1', child: [] },
                { name: 'Item 1.1.4.2', child: [] },
              ],
            },
          ],
        },
        {
          name: 'Item 1.2',
          child: [
            { name: 'Item 1.2.1', child: [] },
            {
              name: 'Item 1.2.2',
              child: [{ name: 'Item 1.2.2.1', child: [] }],
            },
            {
              name: 'Item 1.2.3',
              child: [
                { name: 'Item 1.2.3.1', child: [] },
                {
                  name: 'Item 1.2.3.2',
                  child: [{ name: 'Item 1.2.3.2.1', child: [] }],
                },
                { name: 'Item 1.2.3.3', child: [] },
              ],
            },
          ],
        },
      ],
    },
  ];
}
