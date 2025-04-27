import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface DragonballCharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  name = signal('Goku');
  power = signal(1000);

  characters = signal<DragonballCharacter[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 8000 },
    { id: 4, name: 'Piccolo', power: 7000 },
    { id: 5, name: 'Frieza', power: 9500 },
    { id: 6, name: 'Cell', power: 9000 },
    { id: 7, name: 'Majin Buu', power: 10000 },
    { id: 8, name: 'Trunks', power: 7500 },
    { id: 9, name: 'Krillin', power: 6000 },
    { id: 10, name: 'Bulma', power: 1000 },
    { id: 11, name: 'Yamcha', power: 500 },
    { id: 12, name: 'Tenshinhan', power: 6000 },
    { id: 13, name: 'Chiaotzu', power: 4000 },
    { id: 14, name: 'Master Roshi', power: 3000 },
    { id: 15, name: 'Android 18', power: 8500 },
  ]);

  powerClasses = computed(() => {
    return this.characters().map((character) => {
      if (character.power > 9000) {
        return 'high-power';
      } else if (character.power > 8000) {
        return 'medium-power';
      } else {
        return 'low-power';
      }
    });
  });

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: DragonballCharacter = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((prev) => [...prev, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
