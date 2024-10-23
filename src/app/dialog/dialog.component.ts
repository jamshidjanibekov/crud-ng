import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
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
    MatDatepickerModule, MatIconModule, MatRadioGroup, MatRadioButton, FormsModule, MatDialogActions, MatButton, ReactiveFormsModule
  ],
  templateUrl: 'dialog.component.html',
  styleUrl: './dialog.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {
  foods: Food[] = [
    {value: 'iphone', viewValue: 'Iphone'},
    {value: 'samsung', viewValue: 'Samsung'},
    {value: 'redmi', viewValue: 'Redmi'},
  ];
  favoriteSeason: string | undefined;
  seasons: string[] = ['New', 'Second Hand', 'Old',];
  productForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName:['', Validators.required],
      category: ['', Validators.required],
      condition:['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
      date: ['', Validators.required],
    })
  }
    addProduct(){
      console.log(this.productForm.value);

    }
}

