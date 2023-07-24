import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Dish } from './dish';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dishes = [
      { id: 1, name: 'Joojeh Kebab', color: 'Yellow', flavor: 'Like Chicken', img: '../assets/joojeh-kebab.jpeg', rating: 0},
      { id: 2, name: 'Kebab Koobideh', color: 'Brown', flavor: 'Like Cow', img: '../assets/kebab-koobideh.jpeg', rating: 0},
      { id: 3, name: 'Khoreshteh Karafs', color: 'Green', flavor: 'Like Celery', img: '../assets/khoresh-karafs.jpeg', rating: 0},
      { id: 4, name: 'Ob Goosht', color: 'Orange', flavor: 'Like water and meat', img: '../assets/ob-goosht.jpeg', rating: 0},
      { id: 5, name: 'Tahcheen', color: 'Yellow', flavor: 'Like rice and chicken', img: '../assets/tahcheen.webp', rating: 0},
    ];
    return {dishes};
  }
}