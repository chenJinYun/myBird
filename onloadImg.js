function onloadImg(arr,callback){
  var imgList=[];
  var count=0;
  for(var i=0;i<arr.length;i++){
    var img=new Image();
    img.src='./images/'+arr[i]+'.png';
    imgList[arr[i]]=img;
    arr[i].onload=function(){
      count++;
      if(count>=arr.length){
        callback(imgList);
      }
    }
  }
}
