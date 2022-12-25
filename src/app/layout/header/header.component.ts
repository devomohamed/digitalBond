import { Component } from '@angular/core';
import { faFacebook , faInstagram , faLinkedin , faWhatsapp , faTiktok  } from '@fortawesome/free-brands-svg-icons';
import { faBars , faXmark } from '@fortawesome/free-solid-svg-icons';
// import { faFaBars } from '@fortawesome/fontawesome-svg-core'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faWhatsapp = faWhatsapp
  faTiktok = faTiktok
  faBars = faBars
  faXmark = faXmark

  menuOpened:boolean = false

}
