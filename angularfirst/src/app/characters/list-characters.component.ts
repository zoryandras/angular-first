import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { Character } from '../models/character.model';

@Component({
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss'],
})
export class ListCharactersComponent implements OnInit {
  character: Character[] = [
    {
      id: 1,
      name: 'Ulysses',
      gender: 'male',
      game: 'Cyberpunk 2077',
      platform: 'X-Box Series X',
      dateOfCreation: 2022,
      isCustom: true,
      photoPath: 'assets/images/001.png',
    },
    {
      id: 2,
      name: 'Larion',
      gender: 'male',
      game: 'Final Fantasy XIV',
      platform: 'PC',
      dateOfCreation: 2021,
      isCustom: true,
      photoPath: 'assets/images/002.png',
    },
    {
      id: 3,
      name: 'Dario',
      gender: 'male',
      game: 'Sunset Overdrive',
      platform: 'X-Box Series X',
      dateOfCreation: 2020,
      isCustom: true,
      photoPath: 'assets/images/003.png',
    },
    {
      id: 4,
      name: 'Ilaria',
      gender: 'female',
      game: 'Diablo 2 Resurrected',
      platform: 'PC',
      dateOfCreation: 2022,
      isCustom: true,
      photoPath: 'assets/images/004.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
