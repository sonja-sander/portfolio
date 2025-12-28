import { Component } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-imprint',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {

}
