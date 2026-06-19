//btn要素を取得し定数を代入する
const btn = document.getElementById('btn');
//text要素を取得して定数を代入する
const text = document.getElementById('text');

//btnをクリックしたらイベント処理は実行(テキストが変更する)
btn.addEventListener('click',() => {
  text.textContent ='ボタンをクリックしました';
});