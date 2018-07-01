(function(){
SCRIPT_URL = "./";
document.addEventListener("DOMContentLoaded",onLoad);

function onLoad(){
	var win = GUI.createFrameWindow();				//フレームウインドウの作成
	win.setTitle("ウインドウフレームワークテスト");		//タイトル設定
	win.setPos();									//中央へ移動
	
	var tree = GUI.createTreeView();				//ツリービューの作成
	win.addChild(tree,"client");					//親ウインドウへ追加

	//アイテムを追加
	for(var j=0;j<5;j++){
		var item = tree.addItem("アイテム"+j);
		for(i=0;i<5;i++)
			item.addItem("サブアイテム"+j+"-"+i,false);
	}

	//選択時のイベント処理
	tree.addEvent("select",function(e){
		//選択項目の取得
		var name = tree.getSelectItem().getItemText();
		//メッセージボックスの表示
		GUI.createMessageBox("選択",name+"が選択されました",["OK"]);
	});

}

})();