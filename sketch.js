let font;
let points=[];
let angel = 0
let r = 10
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
  //為載入在fonts資料夾內的NotoSansTC-VariableFont_wght.ttf字型
  font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//
function setup() {   //設定初始內容，只會執行一次
  createCanvas(windowWidth, windowHeight);  //產生一個畫布
  angleMode(DEGREES)
  background("#ced4da")  //設定背景顏色(灰色)
  //
  points = font.textToPoints("zkdLsox", 0, 200, 200, {
    sampleFactor:0.06
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
}
function drew(){

  background("#ced4da")
  
rotate(frameCount%360)
for(let i=0; i<point.length-1; i++){
   fill("#03045e")
   stroke("#90e0ef")
   strokeWeight(5)
   line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x+r*sin(angle+i*10),points[i+1].y+r*sin(angle+i*10))
}
   angle = angle+10
}

function setup() {   //設定初始內容，只會執行一次
    createCanvas(windowWidth, windowHeight);  //產生一個畫布
    background("#ced4da")  //設定背景顏色(灰色)
  }
  
function draw() {   //畫圖，每秒繪畫60秒
    background(220);  //背景顏色，灰白色(0黑色~225白色)
    rectMode(CENTER)  //設正方形座標點放在方形中間
    noFill()  //以下所畫的物件不要充滿顏色
    stroke("#bdb2ff")  //線條的顏色
    strokeWeight(3)  //線條粗細
    //宣告變數
    var rect_width = 80 + mouseX/10 //方形的寬度
    var bc_width = 50 + mouseY/10   //大圓的寬度
    var sc_width = 25 + mouseX/100  //小圓的寬度

    //FOR迴圈
    //i=0:i為變數，要i從0開始(設定i的初始值)
    //i<20:條件判斷，當條件成立時，就繼續行到回圈內的程式執行
    //i=i+1:i 值每次改變的差距值，當回圈內程式碼執行一次完畢後，i值會自動加一
    for(let j=0;j<20;j=j+1){ //產生第幾排，共20排
     for(let i=0;i<30;i=i+1){ //產生一整排的物件(兩個圓加方形)，每排有40個物件
        if(j<5){
            stroke("#d6ccc2")
          }else if(j>10){
            stroke("#ffe5ec")
          }else{
            stroke("#e7c6ff")
          }
        ellipse(25+80*i,30+50*j,bc_width)  //在座標(x:25,y:25)畫一個直徑50的圓
        rect(25+80*i,25+50*j,rect_width)  //畫一個正方形
        ellipse(50+80*i,50+50*j,sc_width)  //在座標(x:50,y:50)畫一個直徑25的圓 
    }
   }
  }
