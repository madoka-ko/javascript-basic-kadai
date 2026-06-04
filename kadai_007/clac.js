//変数numは15
let num = 15;

//変数numが3の倍数かつ5の倍数の時「3と5の倍数です」と出力
if (num % 3 == 0 && num % 5 == 0){
  console.log('3と5の倍数です');
}
//変数numが3の倍数の時「3の倍数です」と出力する
else if (num % 3 == 0){
  console.log('3の倍数です');
}
//変数numが5の倍数の時「5の倍数です」と出力する
else if (num % 5 == 0){
  console.log('5の倍数です');
}
//それ以外の時は変数numを表示
else {
  console.log(num)
}