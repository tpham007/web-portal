import { Directive, ElementRef, Input, OnInit} from '@angular/core';

declare var TrelloBoards: any;
@Directive({
  selector: '[cosProjectLink]'
})
export class ProjectLinkDirective implements OnInit {
  @Input('cosProjectLink') project: any;
  constructor(private el: ElementRef) { 
    
  }
  ngOnInit() {
    TrelloBoards.create(this.project.url, this.el.nativeElement);
  }
}
