(function(){
SCRIPT_URL = "./";
document.addEventListener("DOMContentLoaded",onLoad);

function onLoad(){
	var win = GUI.createFrameWindow();				//フレームウインドウの作成
	win.setTitle("ウインドウフレームワークテスト");		//タイトル設定
	win.setPos();									//中央へ移動
	
	var list = GUI.createListView();					//リストビューの作成	
	win.addChild(list,"client");						//親ウインドウの指定
	
	//ヘッダの設定
	list.addHeader("ID",50);
	list.addHeader("武器",300);
	list.addHeader("攻撃力",100);
	list.addHeader("価格",100);

	//アイテムの設定
	var values = [[1,"ひのきの棒",5,10],[2,"たけやり",8,15],[3,"こんぼう",40,20]];
	values.forEach(function(value){
		var index = list.addItem(value[0]);
		list.setItem(index,1,value[1]);
		list.setItem(index,2,value[2]);
		list.setItem(index,3,value[3]);
	});

	//アイテムクリックイベント
	var mLastIndex = [];
	list.addEvent("itemClick",function(e){
		var index = e.itemIndex;
		var subIndex = e.itemSubIndex;
		//同じ箇所をクリックしたら編集モード
		if(subIndex > 0 && mLastIndex[0] == index && mLastIndex[1] == subIndex){
			var edit = list.editText(index,subIndex);
			edit.addEvent("enter",function(e){
				list.setItem(index,subIndex,e.value);	//編集データを確定
			});
		}
		//前回のクリック番号を保存
		mLastIndex[0] = index;
		mLastIndex[1] = subIndex;
	});
}

})();