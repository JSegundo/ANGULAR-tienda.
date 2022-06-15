import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mi-tienda-ng';
  typeofinput = 'text';

  btnDisabled = true;

  imagen = {
    src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.U8DWIGYNzKQrzk18AB5D7QHaD3%26pid%3DApi&f=1',
    alt: ' icono angular',
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  minombre = 'segundo';

  emojis: Array<String> = ['😂', '🐦', '🐳', '🌮', '💚'];

  newEmoji: string = '';

  addEmoji() {
    for (let i = 0; i <= this.emojis.length; i++) {
      if (this.newEmoji === this.emojis[i]) {
        alert('NO se pueden agregar dos iguales');
        return;
      }
    }

    this.emojis.push(this.newEmoji);
  }

  eliminarEmoji(index: number) {
    this.emojis.splice(index, 1);
  }

  onkeyup(event: Event) {
    const element = event.target as HTMLInputElement;
    this.minombre = element.value;
  }

  userRegister = {
    name: '',
    email: '',
    password: '',
  };

  inputError: string = 'field required!';

  onRegister() {
    console.log(this.userRegister);
  }

  imgparent: string = 'https://www.w3schools.com/howto/img_avatar.png';

  onLoaded(img: String) {
    console.log('llego la info a pp (padre)');
    console.log(img);
  }
}
