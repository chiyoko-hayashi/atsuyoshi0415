const assets = document.getElementById("slick");
console.log("読み込めてるよ");
$(assets).ready(function(){
    $('.slideshow').slick({
        arrows: true, // 前・次のボタンを表示する
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 1, // 表示させるスライド数
        centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
        variableWidth: true, // スライド幅の自動計算を無効化
    });
});