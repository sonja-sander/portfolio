import { Component } from '@angular/core';
import { Navbar } from '../shared/navbar/navbar';
import { Footer } from '../shared/footer/footer';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-privacy',
  imports: [Navbar, Footer, RouterLink],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {

}
