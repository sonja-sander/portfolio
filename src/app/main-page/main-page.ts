import { Component } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { References } from './references/references';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-main-page',
  imports: [Navbar, Footer, Hero, About, Skills, Projects, References, Contact],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
