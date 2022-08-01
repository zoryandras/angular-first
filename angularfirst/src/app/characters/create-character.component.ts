import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Role } from '../models/role.model';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss'],
})
export class CreateCharacterComponent implements OnInit {
  previewPhoto: boolean = false;

  photo: string;

  datePickerConfig: Partial<BsDatepickerConfig>;

  role: Role[] = [
    { id: 1, name: 'Melee DPS' },
    { id: 2, name: 'Ranged DPS' },
    { id: 3, name: 'Magic DPS' },
    { id: 4, name: 'Tank' },
    { id: 5, name: 'Healer' },
  ];

  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        dateInputFormat: 'YYYY/MM/DD',
      }
    );
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit(): void {}

  saveCharacter(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
