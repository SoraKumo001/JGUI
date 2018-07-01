(function(){
SCRIPT_URL = "./";
document.addEventListener("DOMContentLoaded",onLoad);

function onLoad(){
	var win = GUI.createFrameWindow();				//フレームウインドウの作成
	win.setTitle("ウインドウフレームワークテスト");		//タイトル設定
	win.setPos();									//中央へ移動
	
	var tree = GUI.createTreeView();
	win.addChild(tree,"client");

	for(var j=0;j<5;j++){
		var item = tree.addItem("アイテム"+j);
		for(i=0;i<5;i++)
			item.addItem("サブアイテム"+j+"-"+i,false);
	}

}

})();