import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from './note.model';  

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [
    { id: 1, title: 'title A', content: 'Welcome' },
    { id: 2, title: 'title B', content: 'Content of B' }
  ];

  private notesSubject = new BehaviorSubject<Note[]>(this.notes);

  getNotes() {
    return this.notesSubject.asObservable();
  }

  addNote(note: Note) {
    this.notes.push({...note, id: Date.now()});  
    this.notesSubject.next(this.notes);
  }

  updateNote(updatedNote: Note) {
    this.notes = this.notes.map(note => note.id === updatedNote.id ? updatedNote : note);
    this.notesSubject.next(this.notes);
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter(note => note.id !== id);
    this.notesSubject.next(this.notes);
  }
}
