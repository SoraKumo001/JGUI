(function(){
SCRIPT_URL = "./";
document.addEventListener("DOMContentLoaded",onLoad);

function onLoad(){
	var win = GUI.createFrameWindow();				//フレームウインドウの作成
	win.setTitle("ウインドウフレームワークテスト");		//タイトル設定
	win.setPos();									//中央へ移動
	
	var sep = GUI.createSeparate();					//セパレータの作成	
	win.addChild(sep,"client");						//親ウインドウの指定

	sep.getChild(0).getClient().innerHTML = "領域1";
	sep.getChild(1).getClient().innerHTML = "領域2";
}

})();