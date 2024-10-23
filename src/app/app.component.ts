import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from "./dialog/dialog.component";
import {MatDialog} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    MatIcon,
    MatToolbarModule,
    MatIconButton,
    MatButton,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dialog = inject(MatDialog);
  title = 'ng-app';
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'35%'
    });
  }
}
