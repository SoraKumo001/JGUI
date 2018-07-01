(function(){
SCRIPT_URL = "./";
document.addEventListener("DOMContentLoaded",onLoad);

function onLoad(){
	for(var j=0;j<10;j++){
		var parent = GUI.createFrameWindow();	//フレームウインドウの作成
		parent.setTitle("Window"+j);			//タイトル設定	
		parent.setPos(j*30,j*30);				//位置設定
		for(var i=0;i<3;i++){
			var win = GUI.createFrameWindow();
			win.setTitle("Window"+j+":"+i);
			win.setSize(200,150);
			parent.addChild(win);				//親ウインドウの設定
			win.setPos(i*40,i*40);
		}
	}
}

})();