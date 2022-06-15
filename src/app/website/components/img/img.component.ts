/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  constructor() {
    // antes del render
    // no hacer async
  }

  ngOnChanges() {
    // antes y durante el render
    // esta actualizando los cambios en los inputs. cada vez que se actualiza un valor, se ejecuta.
  }

  counter: number = 0;

  ngOnInit(): void {
    // antes del render - Una vez.
    // aca se hacen llamadas async - fetch.
  }

  ngAfterViewInit() {
    // despues del render
    // aca se manejan los hijos
  }

  ngOnDestroy() {
    // cuando se elimina el componente
  }

  @Input() img: string =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RAubIxqEWEwx3kcb0x0JhQHaFj%26pid%3DApi&f=1';
  @Output() loaded = new EventEmitter<String>();

  imgDefecto =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RAubIxqEWEwx3kcb0x0JhQHaFj%26pid%3DApi&f=1';

  imgError() {
    this.img = this.imgDefecto;
  }

  imgLoaded() {
    // console.log('img laoded. mensaje desde componente img hijo de app');
    this.loaded.emit(this.img);
  }
}
