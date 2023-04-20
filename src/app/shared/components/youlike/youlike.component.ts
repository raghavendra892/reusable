import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-youlike',
  templateUrl: './youlike.component.html',
  styleUrls: ['./youlike.component.scss']
})
export class YoulikeComponent implements OnInit {
   @Input() isLikedY ! : boolean
  @Output() emmitLikeStatusY : EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  onLikeY(){
    this.isLikedY = !this.isLikedY
    this.emmitLikeStatusY.emit(this.isLikedY)
  }
  onDislikeY(){
    this.isLikedY = !this.isLikedY
    this.emmitLikeStatusY.emit(!this.isLikedY)
  }
}
