let angle = 0
let r=50
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0) //背景顏色為黑色
  angleMode(DEGREES) //設定使用到角度，採用數字的方式0~360
  frameRate(10)
}
function draw() { //開始畫圖
  //background(220);
  background(0)
  translate(width/2,height/2)
  //視窗的中心畫600 600的方形，框線為白色
  noFill()  //以下所畫的物件不要充滿顏色
  stroke(255)  //線條的顏色
  rectMode(CENTER)  //設正方形座標點放在方形中間
  rotate(sin(angle)*40)//sin的值介於-1~1之間
  rect(0,0,600,600,100) //畫一個方形邊長600，圓弧在四角寬高為100

  for(let i=0;i<114;i=i+1){
    //let r= random(50,255) //抽一個亂數，亂數的值介於50(包含)~255(不包含)間
    //let g= random(50,255) //抽一個亂數，亂數的值介於50(包含)~255(不包含)間
    //let b= random(50,255) //抽一個亂數，亂數的值介於50(包含)~255(不包含)間
    let r= map(sin(frameCount),-1,1,50,255)
    let g= map(sin(frameCount/2),-1,1,50,255)
    let b= map(sin(frameCount/4),-1,1,50,255)
    stroke(r,g,b)
    rect(0,0,600-2*i,600-2*i,100)
    rotate(sin(angle-2*i)*10)
}
  angle = angle+1
}
