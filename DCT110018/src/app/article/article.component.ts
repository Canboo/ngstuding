import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  {

  @Input() item: any;
  @Input() index: number;

  constructor() { }

  @Output() delete = new EventEmitter<number>();
  doDelete() {
    this.delete.emit(this.index);
  }

}
