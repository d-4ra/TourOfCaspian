import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Dish } from './dish';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dishes = [
      { id: 1, name: 'Joojeh Kebab', color: 'Yellow', flavor: 'Like Chicken', img: '../assets/joojeh-kebab.jpeg'},
      { id: 2, name: 'Kebab Koobideh', color: 'Brown', flavor: 'Like Cow', img: '../assets/kebab-koobideh.jpeg'},
      { id: 3, name: 'Khoreshteh Karafs', color: 'Green', flavor: 'Like Celery', img: '../assets/khoresh-karafs.jpeg'},
      { id: 4, name: 'Ob Goosht', color: 'Orange', flavor: 'Like water and meat', img: '../assets/ob-goosht.jpeg'},
      { id: 5, name: 'Tahcheen', color: 'Yellow', flavor: 'Like rice and chicken', img: '../assets/tahcheen.webp'},
    ];
    return {dishes};
  }
}