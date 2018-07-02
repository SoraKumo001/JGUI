(function(){
SCRIPT_URL = "./";
document.addEventListener("DOMContentLoaded",onLoad);

function onLoad(){
	//フレームウインドウの作成
	var win = GUI.createFrameWindow();
	win.setTitle("サンプル一覧");		//タイトル設定	
	win.setPos();						//中央へ移動	
	//リストビューの作成
	var list = GUI.createListView();
	list.addHeader("番号",50);
	list.addHeader("タイトル",300);
	list.addHeader("URL",300);
	win.addChild(list,"client");
	//リストビューにアイテムを追加
	var titles = [
		["Sample01","フレームウインドウテスト",],
		["Sample02","複合ウインドウテスト"],
		["Sample03","セパレータ"],
		["Sample04","リストビュー"],
		["Sample05","ツリービュー"],
		["Sample06","qiita読み取りテスト"]
	];
	titles.forEach(function(value,index){
		list.addItem(index+1);
		list.setItem(index,1,value[1]);
		list.setItem(index,2,location.href+"Samples/"+value[0]);
	});

	//リストビューアイテムクリック処理
	list.addEvent("itemClick",function(e){
		var url = list.getItemText(e.itemIndex,2);
		location.href = url;
	});
}

})();