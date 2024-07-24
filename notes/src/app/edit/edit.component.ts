import { Component, Input } from '@angular/core';
import {  NoteService } from '../note.service';
import { Note } from '../note.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
@Input() note! : Note;

constructor(private noteService: NoteService){}

// onSave(){
//   if(this.note.id){
//     this.noteService.updateNotes(this.note.id, this.note);
//   }
//   else{
//     const newNote = {...this.note, id:Date.now()};
//     this.noteService.addNote(newNote);
//   }
// }

}
