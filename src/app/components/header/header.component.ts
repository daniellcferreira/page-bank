import { Component } from '@angular/core';
import { LogoWhiteComponent } from "../../../assets/svgs/logo-white/logo-white.component";
import { SearchLogoComponent } from "../../../assets/svgs/search-icon/search-icon.component";
import { BellIconComponent } from "../../../assets/svgs/bell-icon/bell-icon.component";
import { UserIconComponent } from "../../../assets/svgs/user-icon/user-icon.component";

@Component({
  selector: 'app-header',
  imports: [LogoWhiteComponent, SearchLogoComponent, BellIconComponent, UserIconComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
