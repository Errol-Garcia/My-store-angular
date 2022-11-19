import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string= '';

  @Input('img')
    set changeImg(newImg: string){
      this.img = newImg;
      //code
      console.log('change just img =>', this.img);
    }

  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.jpg';
  //counter = 0;
  //counterFn: number | undefined;

  constructor() {
    //before render
    //no correr async
    console.log('constructor','imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //before render
    //changes unputs -- times
    console.log('ngOnChanges','imgValue =>', this.img);
    console.log('changes', changes);
  }
  ngOnInit(): void {
    //before - during - render
    //correr cosas async -- corre once time
    console.log('ngOnInit','imgValue =>', this.img);
    //this.counterFn = window.setInterval(() => {
    //  this.counter +=1;
    //  console.log('run counter');
    //},1000)
  }

  ngAfterViewInit(): void {
    //after render
    //hadler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //delete component
    console.log('ngOnDestroy');
    //window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}


//https://www.w3schools.com/howto/img_avatar.png
