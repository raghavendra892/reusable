import { Component } from '@angular/core';
import { Ireel, IreelY } from './shared/models/reels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reusable';

  // reelsY : Array<IreelY> = [
  //   {
  //     titleY : "Lorem 1",
  //     likecountY : 5675,
  //     isLikeY : false,
  //     idY : 1
    
  //   },
  //   {
  //     titleY : "Lorem 2",
  //     likecountY : 7895,
  //     isLikeY : true,
  //     idY : 2
  //   },
  //   {
  //     titleY : "Lorem 3",
  //     likecountY : 2354,
  //     isLikeY : false,
  //     idY : 3
  //   },
  //   {
  //     titleY : "Lorem 4",
  //     likecountY : 9456,
  //     isLikeY : true,
  //     idY : 4
  //   }
  // ];

  // getLikestatusY(likeStatusY:any, idY :number){
  //   console.log(likeStatusY,idY)
  //   this.reelsY.forEach(reelY =>{
  //     if(reelY.idY === idY){
  //       if(likeStatusY){
  //         reelY.likecountY++ 
  //       }
  //       if(!likeStatusY){
  //         reelY.likecountY--
  //       }
  //     }
  //   })
  // }



  reels : Array<Ireel> =[
    {
      title : "Javascriptmastery",
      likeCount : 9875,
      isLike : false,
      id : 1
    },
    {
      title : "Codechips",
      likeCount : 3456,
      isLike : true,
      id : 2
    },
    {
      title : "Codeinjs",
      likeCount : 1256,
      isLike : false,
      id : 3
    },
    {
      title : "Javascript_web.js",
      likeCount : 3675,
      isLike : true,
      id :4
    }
  ];

  getLikestatus(likeStatus:any, id:number){
    console.log(likeStatus,id)
    this.reels.forEach(reel =>{
      if(reel.id === id){
        if(likeStatus){
          reel.likeCount++
        }else{
          reel.likeCount--
        }
      }
    })
  }
}
