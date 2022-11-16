var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
function preload(){
  song = loadSound("seal.mp3");}

function setup() {
  createCanvas(windowWidth,windowHeight);
  music_btn = createButton("播音樂")
  music_btn.position(10,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', '#489fb5');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)
  
  mouse_btn = createButton("暫停")
  mouse_btn.position(370,10)
  mouse_btn.size(350, 100);
  mouse_btn.style('background-color', '#489fb5');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)
}
function music_btn_pressed(){
   song.stop()
   song.play()
   songIsplay = true
   mosueIsplay = false
   amp=new p5.Amplitude()
   music_btn.style('background-color', '#16697a')
   mouse_btn.style('background-color', '#489fb5')
   
}

function mouse_btn_pressed(){
   song.pause()
   mosueIsplay = true
   songIsplay = false
   music_btn.style('background-color', '#489fb5')
   mouse_btn.style('background-color', '#16697a')
    
    }

function draw() {
   background("#98c1d9");
   textSize(40)
   text("X:"+mouseX+"  Y:"+mouseY,50,50)
  
   
  //最左邊的海豹
    translate(0,0)
    fill("#FF1E6")
    stroke("#E5E5E5")
    strokeWeight(2)
    ellipse(220+mouseX/100,580+mouseY/90,100,50)//D taill
    ellipse(210+mouseX/100,575+mouseY/70,80,30)//U taill
    
    fill("#FF1E6")
    noStroke()
    ellipse(220+mouseX/350,400+mouseY/80,200)//head
    ellipse(250+mouseX/80,460+mouseY/70,300,250)//body
    ellipse(125+mouseX/500,380+mouseY/90,45,40)//mouth
 
    stroke("#E5E5E5")
    strokeWeight(2)
    fill("#fffcf2")
    ellipse(121+mouseX/500,379+mouseY/90,15)//nouse R
    ellipse(108+mouseX/500,379+mouseY/90,15)//nouse L
   
    fill(0)
    noStroke()
    ellipse(155+map(mouseX,0,width,-3,5),350+map(mouseY,0,height,-3,8),10,8)//eye
    ellipse(153+map(mouseX,0,width,-3,5),340+map(mouseY,0,height,-2,4),5,3)//眉毛

    fill("#fff0f3")
    ellipse(165+mouseX/350,373+mouseY/80,20,15)//腮紅R
   

beginShape() //nose           
    fill(0)
    strokeWeight(2)
    curveVertex(110+mouseX/500,370+mouseY/90) 
    curveVertex(114+mouseX/500,371+mouseY/90)
    curveVertex(118+mouseX/500,370+mouseY/90)  
    curveVertex(114+mouseX/500,375+mouseY/90)
endShape(CLOSE)


    //中間的海豹
    translate(width/2,height/2)
    fill("#FF1E6")
    noStroke()
    ellipse(0,0+map(mouseY,0,height,-10,12),400,300)
    ellipse(-25,40+map(mouseY,0,height,-10,12),400,220)
    ellipse(-10,0+map(mouseY,0,height,-10,12),400,300)//左
    ellipse(200,-20+mouseY/20,90,30)//up tail
    ellipse(200,0+mouseY/20,100,30)//down tail
    
    fill(0)
    ellipse(-160+mouseX/80,-30+mouseY/50,15,12)//lefe eye B
    ellipse(-90+mouseX/80,-30+mouseY/50,15,12)//right eye B 
    ellipse(-140+mouseX/100,-50+mouseY/100,8,5)//眉毛左
    ellipse(-100+mouseX/100,-50+mouseY/100,8,5)//眉毛右
    
    fill(255)
    ellipse(-163+mouseX/80,-33+mouseY/50,4,2)//lefe eye W U
    ellipse(-93+mouseX/80,-33+mouseY/50,4,2)//right eye W U
    ellipse(-158+mouseX/80,-28+mouseY/50,4,2)//lefe eye W D
    ellipse(-88+mouseX/80,-28+mouseY/50,3,2)//right eye W D
    
    noStroke()
    fill("#FFAFCC")
    ellipse(-125,-10+mouseY/50,15)//mouth pinck

    noStroke()
    strokeWeight(2)
    fill("#E5E5E5")
    ellipse(-115,-15+mouseY/50,15)//mouth right
    ellipse(-135,-15+mouseY/50,15)//moutk left

    stroke("#E5E5E5")
    fill("#FF1E6")
    ellipse(80,95+map(mouseY,0,height,-50,12),200,85)//hand
    
    fill("#FF1E6")
    noStroke()
    ellipse(0,80,70,65)//遮手
    fill("#feeafa")
    ellipse(-180,-10+map(mouseY,0,height,-10,12),20,10)//腮紅L
    ellipse(-70,-10+map(mouseY,0,height,-10,12),20,10)//腮紅R

beginShape() //nose           
    fill(0)
    curveVertex(-130,-20+mouseY/50) 
    curveVertex(-120,-20+mouseY/50)  
    curveVertex(-125,-15+mouseY/50)
endShape(CLOSE)
   

  //右邊的海豹
    translate(width/3,height/3)//設置中心點
    fill("#FF1E6")
    noStroke()
    ellipse(-100+map(mouseX,0,width,-3,3),-190+map(mouseY,0,height,-2,2),150)//head
    //fill(0)
    ellipse(-130+map(mouseX,0,width,-3,3),-130+map(mouseY,0,height,-2,2),105,230)//left body
    stroke("#E5E5E5")
    ellipse(-10+mouseX/30,-85,300,200)//right body
    fill("#FF1E6")
    noStroke()
    ellipse(150+mouseX/30,-50+mouseY/30,100,30)//D taill
    ellipse(150+mouseX/30,-70+mouseY/30,90,40)//U taill
    //fill(0)
    fill("#FF1E6")
    stroke("#E5E5E5")
    ellipse(-25+mouseX/90,0+mouseY/70,150,45)//hand
    fill("#FF1E6")
    noStroke()
    ellipse(-76+map(mouseX,0,width,-3,3),-85+map(mouseY,0,height,-2,2),205,180)//middle body
   
    fill("#E3D5CA")
    ellipse(-130,-210,25,20)//big nose
    fill("#C6AC8F")
    ellipse(-130,-215,10,5)//small nose
    fill("#feeafa")
    ellipse(-160+map(mouseX,0,width,-3,3),-200+map(mouseY,0,height,-2,2),10,5)//腮紅L
    ellipse(-100+map(mouseX,0,width,-3,3),-200+map(mouseY,0,height,-2,2),10,5)//腮紅R

    fill(0)
    ellipse(-150+map(mouseX,0,width,-3,3),-230+map(mouseY,0,height,-2,2),8,3)//眉眉毛 L
    ellipse(-110+map(mouseX,0,width,-3,3),-230+map(mouseY,0,height,-2,2),8,3)//眉眉毛 R
    ellipse(-155,-212,10)//eye L
    ellipse(-105,-212,10)//eye R
   
    fill("#FF1E6")
    ellipse(-155+map(mouseX,0,width,-2,2),-212+map(mouseY,0,height,-2,2),3)//eye L
    ellipse(-105+map(mouseX,0,width,-2,2),-212+map(mouseY,0,height,-2,2),3)//eye R
    
    fill("#edafb8")
    triangle(-150,-180,-150,-160,-135,-170)
    triangle(-120,-180,-120,-160,-135,-170)

pop()




 


  }

 
