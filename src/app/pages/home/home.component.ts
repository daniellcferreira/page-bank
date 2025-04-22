import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CardBoxComponent } from "../../components/card-box/card-box.component";
import { AmountBoxComponent } from "../../components/amount-box/amount-box.component";
import { CarouselItemsComponent } from "../../components/carousel-items/carousel-items.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CardBoxComponent, AmountBoxComponent, CarouselItemsComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
