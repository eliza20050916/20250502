let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#ffecd1'); // 設定背景顏色
  capture = createCapture(VIDEO); // 啟用攝影機
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的攝影機影像
}

function draw() {
  background('#ffecd1'); // 每次繪製時重設背景顏色
  image(
    capture,
    (width - capture.width) / 2, // 計算影像的水平居中位置
    (height - capture.height) / 2, // 計算影像的垂直居中位置
    capture.width,
    capture.height
  ); // 將影像顯示在畫布中央
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新影像大小
}
