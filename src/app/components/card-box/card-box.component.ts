import { Component } from '@angular/core';
import { LogoWhiteComponent } from "../../../assets/svgs/logo-white/logo-white.component";

@Component({
  selector: 'app-card-box',
  imports: [LogoWhiteComponent],
  standalone: true,
  templateUrl: './card-box.component.html',
  styleUrl: './card-box.component.css'
})
export class CardBoxComponent {

}
