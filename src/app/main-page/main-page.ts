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
/**
 * Provides the main page layout and composes all primary page sections.
 *
 * This component acts as the top-level container for the landing page and
 * brings together shared UI (e.g., {@link Navbar}, {@link Footer}) and the
 * main content sections (e.g., {@link Hero}, {@link About}, {@link Skills},
 * {@link Projects}, {@link References}, {@link Contact}).
 *
 * @remarks
 * The class currently contains no additional logic and is primarily defined
 * by its template and styles.
 */
export class MainPage {
  
}
