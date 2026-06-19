//btnを取得し定数を代入する
const btn = document.getElementById('btn');
//textを取得し定数を代入する
const text = document.getElementById('text');

//btnをクリックしたらイベント処理を実行
btn.addEventListener('click',() => {
  //クリックして2秒後に変更テキスト表示
  setTimeout(() => {
    text.textContent='ボタンをクリックしました';
  },2000);

});