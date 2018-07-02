(function(){
document.addEventListener("DOMContentLoaded",onLoad);

//Json形式のデータを受け取る
function recvJson(url,proc) {
	var xmlHttp = xmlHttp = new XMLHttpRequest();
	xmlHttp.open('GET', url, true);
	xmlHttp.onreadystatechange = function (){
		
		if(this.readyState == 4){
			try{
				proc(JSON.parse(xmlHttp.response));
			}catch(e){
				proc(null);
			}
		}
	}
	xmlHttp.send();
}
var mQiitaDatas = [];	//データキャッシュ用
function onLoad(){
	//Qiitaにデータを要求する
	function getQiita(page){
		if(mQiitaDatas[page] != null)
			reloadList(page);
		else{
			var msgBox = GUI.createMessageBox("メッセージ","データ読み取り中",["OK"]);
			//qiita-apiにデータの問い合わせ
			recvJson("https://qiita.com/api/v2/items?per_page=100&page="+page,function(values){
				if(values === null)
					return;
				mQiitaDatas[page] = values;	//データをキャッシュ
				msgBox.close();				//メッセージボックスを閉じる
				reloadList(page);
			});
		}

	}
	//リストビューの更新処理
	function reloadList(page){
		list.clearItem();		//リストビューのクリア
		var values = mQiitaDatas[page];
		//リストビューにデータを挿入
		values.forEach(function(value){
			var date = new Date(value['created_at']);			//受け取った日付をDateに突っ込む
			var index = list.addItem(date.toLocaleString());	//ローカル時間に変換
			list.setItem(index,1,value["title"]);				//タイトルを設定
		});
	}

	//CSSの追加
	var link = document.createElement("link");
	link.media = "all";
	link.rel = "stylesheet";
	link.href = "https://cdn.qiita.com/assets/public-0ff749915fc787edd0a35b1c35d9440c.min.css";
	document.head.appendChild(link);

	var body = GUI.createWindow();					//本文表示領域の作成
	body.setChildStyle("client");					//領域を画面いっぱいに
	body.getClient().style="overflow:auto";			//スクロール出来るように設定

	var win = GUI.createFrameWindow();				//フレームウインドウの作成
	win.setTitle("ウインドウフレームワークテスト");		//タイトル設定
	win.setSize(640,800);							//ウインドウサイズの設定
	win.setPos();									//中央へ移動
	
	var panel = GUI.createPanel();					//パネルの作成
	panel.getClient().style = "display: flex;justify-content: center;";
	win.addChild(panel,'top');
	panel.getClient().innerHTML = "<input type='button' value='←'><span style='padding:4px'>1</span><input type='button' value='→'>";

	var page = panel.getClient().querySelector("span");			//ページ設定
	var buttons = panel.getClient().querySelectorAll("input");
	buttons[0].addEventListener("click",function(){if(page.textContent>1)--page.textContent;getQiita(page.textContent);})
	buttons[1].addEventListener("click",function(){++page.textContent;getQiita(page.textContent);})
	
	var list = GUI.createListView();				//リストビューの作成
	win.addChild(list,"client");					//親ウインドウへ追加
	list.addHeader("日時",200);						//ヘッダ項目の作成
	list.addHeader("タイトル",400);
	list.addEvent("itemClick",function(e){			//アイテムクリック時の処理
		var index = e.itemIndex;
		var value = mQiitaDatas[page.textContent][index];
		var html = //qiitaと同じスタイルになるように体裁を設定
			'<div class="p-items_container"><div class="p-items_main"><div class="it-MdContent">'+
			'<h1>'+value["title"]+'</h1>'+value["rendered_body"]+'</div></div></div>';
		body.getClient().innerHTML = html;
		body.getClient().scrollTop = 0;				//スクロール位置を初期化
	});

	getQiita(page.textContent);						//データを要求

}

})();