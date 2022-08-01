import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
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
      dateOfCreation: new Date('05/05/2022'),
      isCustom: true,
      role: 'Melee DPS',
      photo: 'assets/images/001.png',
    },
    {
      id: 2,
      name: 'Larion',
      gender: 'male',
      game: 'Final Fantasy XIV',
      platform: 'PC',
      dateOfCreation: new Date('01/19/2021'),
      isCustom: true,
      role: 'Melee DPS',
      photo: 'assets/images/002.png',
    },
    {
      id: 3,
      name: 'Dario',
      gender: 'male',
      game: 'Sunset Overdrive',
      platform: 'X-Box Series X',
      dateOfCreation: new Date('08/10/2020'),
      isCustom: true,
      role: 'Ranged DPS',
      photo: 'assets/images/003.png',
    },
    {
      id: 4,
      name: 'Ilaria',
      gender: 'female',
      game: 'Diablo 2 Resurrected',
      platform: 'PC',
      dateOfCreation: new Date('11/06/2022'),
      isCustom: true,
      role: 'Magic DPS',
      photo: 'assets/images/004.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
