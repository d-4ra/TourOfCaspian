import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Dish } from './dish';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dishes = [
      { id: 1, 
        name: 'Joojeh Kebab', 
        color: 'Yellow', 
        flavor: 'Like Chicken, with juicy yellow roast', 
        img: '../assets/joojeh-kebab.jpeg', 
        recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
        rating: 14},
        
      { id: 2, 
        name: 'Kebab Koobideh', 
        color: 'Brown', 
        flavor: 'Like Cow, smashed till it\'s paper', 
        img: '../assets/kebab-koobideh.jpeg', 
        recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
        rating: 8},

      { id: 3, 
        name: 'Khoreshteh Karafs', 
        color: 'Green', 
        flavor: 'Like Celery, and other green stuff', 
        img: '../assets/khoresh-karafs.jpeg', 
        recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
        rating: 3},

      { id: 4, 
        name: 'Ob Goosht', 
        color: 'Orange', 
        flavor: 'Like water and meat, but more water', 
        img: '../assets/ob-goosht.jpeg', 
        recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
        rating: 3},

      { id: 5, 
        name: 'Tahcheen', 
        color: 'Yellow', 
        flavor: 'Like rice and chicken, but more rice', 
        img: '../assets/tahcheen.webp', 
        recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
        rating: 0},
    ];
    return {dishes};
  }
}