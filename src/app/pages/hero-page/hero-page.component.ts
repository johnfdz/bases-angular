import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  imports: [UpperCasePipe],
  standalone: true,
})
export class HeroPageComponent {
  name = signal('John');
  age = signal(30);

  getHeroDescription(): string {
    return `${this.name()} is ${this.age()} years old.`;
  }

  changeHero() {
    this.name.set('Jane');
    this.age.set(25);
  }

  resetForm() {
    this.name.set('John');
    this.age.set(30);
  }

  changeAge() {
    this.age.update((current) => current + 1);
  }
}
