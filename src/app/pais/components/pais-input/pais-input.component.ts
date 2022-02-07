import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject<string>();

  termino: string = '';
  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300))
      .subscribe( valor => {
        // this.buscar();
        this.onDebounce.emit( valor );
    })
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {

    this.debouncer.next(this.termino);
  }

}
