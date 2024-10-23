import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatOption, MatSelect} from "@angular/material/select";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {endWith} from "rxjs";
import {MatButton} from "@angular/material/button";

interface Food{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogClose,
    MatDialogTitle,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatSelect,
    MatOption,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerModule, MatIconModule, MatRadioGroup, MatRadioButton, FormsModule, MatDialogActions, MatButton
  ],
  templateUrl: 'dialog.component.html',
  styleUrl: './dialog.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  foods: Food[] = [
    {value: 'iphone', viewValue: 'Iphone'},
    {value: 'samsung', viewValue: 'Samsung'},
    {value: 'redmi', viewValue: 'Redmi'},
  ];
  favoriteSeason: string | undefined;
  seasons: string[] = ['New', 'Second Hand', 'Old',];
  protected readonly endWith = endWith;
}

