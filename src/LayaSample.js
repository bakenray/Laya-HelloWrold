// var WebGL = laya.webgl.WebGL;
// Laya.init(600, 400, WebGL);

function GameMain(){
    // 初始化引擎
    // 参1屏宽 
    // 参2屏高 
    // 参3（可选）是否使用webgl渲染.如果不支持，建议使用canvas渲染
    Laya.init(600,400,Laya.WebGL) 

    //屏幕缩放模式，始终全部等比显示
    Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL  
    //屏幕不缩放
    // Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE  

    //水平对齐方式 水平居中
    Laya.stage.alignH =Laya.Stage.ALIGN_CENTER 

    //垂直对齐方向方式 垂直居中
    Laya.stage.alignV =Laya.Stage.ALIGN_MIDDLE 

    //屏幕适配，横屏还是竖屏，默认不改变
    Laya.stage.screenMode =Laya.Stage.SCREEN_NONE 

    //实现helloworld
    //1.创建一个精灵（或者精灵的扩展的实例）
    //2.给这个实例设置内容（设置helloworld）
    //3.设置实例的坐标等属性
    //4.把这个实例添加到舞台（屏幕中央）

    //1.创建一个文本类的实例
    var tx = new Laya.Text()

    //2.设置文本内容
    tx.text= "hello world"

    //3.设置文本显示在屏幕中的坐标，文本颜色，文本字体大小
    tx.pos(Laya.stage.width/2,Laya.stage.height/2)
    tx.color = "#ffffff"
    tx.fontSize = 55

    //4.添加到屏幕中央
    Laya.stage.addChild(tx)

    //5.让文本始终在屏幕中文
    //设置实例的轴心点
    tx.pivot(tx.width/2,tx.height/2)
}

GameMain();
