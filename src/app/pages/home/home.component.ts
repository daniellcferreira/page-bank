import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
