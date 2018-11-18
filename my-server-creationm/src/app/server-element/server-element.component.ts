import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild  } from '@angular/core';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit{
  
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('test content'+this.header.nativeElement.textContent);
    console.log('test content of paragraph:'+ this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChange){
    console.log('ngOnChanges called');
    console.log(changes);
  }
  
  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called.');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called.');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called.');
    console.log('test content'+this.header.nativeElement.textContent);    
    console.log('test content of paragraph:'+ this.paragraph.nativeElement.textContent);
    
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called.');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called.');
  }
}
