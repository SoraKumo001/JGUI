(function(){
SCRIPT_URL = "./";
document.addEventListener("DOMContentLoaded",onLoad);

function onLoad(){
	var win = GUI.createFrameWindow();				//フレームウインドウの作成
	win.setTitle("ウインドウフレームワークテスト");		//タイトル設定
	win.setPos();									//中央へ移動
	//HTMLを直接設定
	win.getClient().innerHTML = "<H1>テスト</H1>HTMLの設定テスト";
}

})();