let capture;
let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#ffecd1'); // 設定背景顏色

  // 嘗試啟用攝影機
  try {
    capture = createCapture(VIDEO);
    capture.size(windowWidth * 0.8, windowHeight * 0.8);
    capture.hide();
  } catch (err) {
    console.error('攝影機無法啟用:', err);
    noLoop(); // 停止 draw 迴圈
  }

  // 建立與視訊畫面相同大小的圖形
  graphics = createGraphics(capture.width, capture.height);
}

function draw() {
  background('#ffecd1'); // 每次繪製時重設背景顏色

  // 更新 graphics 的內容
  graphics.background(0); // 設定背景為黑色
  for (let x = 0; x < graphics.width; x += 20) {
    for (let y = 0; y < graphics.height; y += 20) {
      // 從 capture 中取得相對應位置的顏色
      let col = capture.get(x, y);
      graphics.fill(col); // 設定圓的顏色
      graphics.noStroke();
      graphics.ellipse(x + 10, y + 10, 15, 15); // 繪製圓，中心點偏移 10 以對齊單位格
    }
  }

  // 顯示圖形在畫布正中間
  image(
    graphics,
    (width - graphics.width) / 2, // 計算圖形的水平居中位置
    (height - graphics.height) / 2, // 計算圖形的垂直居中位置
    graphics.width,
    graphics.height
  );

  // 顯示攝影機影像
  // push(); // 儲存當前繪圖狀態
  // translate(width / 2, height / 2); // 將原點移動到畫布中央
  // scale(-1, 1); // 水平翻轉影像
  // image(
  //   capture,
  //   -capture.width / 2, // 調整影像位置以保持居中
  //   -capture.height / 2,
  //   capture.width,
  //   capture.height
  // ); // 顯示翻轉後的影像
  // pop(); // 恢復繪圖狀態
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新影像大小
  graphics.resizeCanvas(capture.width, capture.height); // 更新圖形大小
}
