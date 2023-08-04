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

        { id: 6, 
          name: 'Baghali Polo', 
          color: 'Green', 
          flavor: 'Green plant things, with some meat too, topped on rice', 
          img: '../assets/baghali-polo.png', 
          recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
          rating: 0},
        
        { id: 7, 
          name: 'Chai Nabat', 
          color: 'Red', 
          flavor: 'Viciously dangerous red substance which causes long term addictions', 
          img: '../assets/chai-nabat.jpeg', 
          recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
          rating: 9},

        { id: 8, 
          name: 'Gheimeh Polo', 
          color: 'Orange', 
          flavor: 'Bean looking things and french fries with rice of course', 
          img: '../assets/gheimeh-polo.jpeg', 
          recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
          rating: 0},

        { id: 9, 
          name: 'Fesenjoon', 
          color: 'Brown', 
          flavor: 'Pomegranate stew or something, with chicken as protein', 
          img: '../assets/fesenjoon.jpeg', 
          recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
          rating: 4},

        { id: 10, 
          name: 'Ashe Reshteh', 
          color: 'Green', 
          flavor: 'So many flavors to be honest, idk. But you can also eat it with bread', 
          img: '../assets/ashe-reshteh.webp', 
          recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
          rating: 0},

        { id: 11, 
          name: 'Kuku Sabzi', 
          color: 'Green', 
          flavor: 'Its like plants and stuff that are green, but the top and bottom are brown or burnt', 
          img: '../assets/kukusabzi.jpeg', 
          recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
          rating: 0},

        { id: 12, 
          name: 'Sholeh Zard', 
          color: 'Yellow', 
          flavor: 'A yellow dessert which is yellow, and tastes yellow', 
          img: '../assets/sholehzard.jpeg', 
          recipeURL: [['Skyler White Yo', 'https://assets3.thrillist.com/v1/image/2537541/792x799/flatten;scale;webp=auto;jpeg_quality=60.jpg']], 
          rating: 0},
    ];
    return {dishes};
  }
}