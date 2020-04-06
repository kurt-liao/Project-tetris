Project Tetris: 俄羅斯起子
===

> 組長：B10415025 Sam B10415025@mail.ntust.edu.tw
> 組員：B10415031 廖晨竹 B10415031@mail.ntust.edu.tw
> 組員：B10415048 楊宗儒 B10415048@mail.ntust.edu.tw
> 組員：B10415012 黃政維 B10415012@mail.ntust.edu.tw

---

## Introduction
決戰俄羅斯是一款傳統俄羅斯方塊的遊戲，主要以網頁方式呈現，HTML 為框架、CSS為遊戲畫面的調整，Javascript 則會以MVC 設計架構來呈現，透過簡單的方向鍵控制來回味兒時的經典遊戲。

---

## Design Considerations
### Assumptions
1. 由於寫的是網頁，必須透過瀏覽器去開啟檔案。
2. 不同的瀏覽器版面配置可能會有所差異，所以我們在環境要求寫只提供 Google Chrome，就是為了預防排版誤差。
3. 程式的語法可能會因為時代的推移而有所更改或移除，無法保證程式以後能正常地啟動。

### Constraints
1. 由於是運用瀏覽器，所以此遊戲可在瀏覽器支援的多作業系統下執行。
2. 網頁屬靜態網頁，可在不需要網路的情況下執行，且不會有資料庫來存取任何資料。
3. 若遇到瀏覽器或遊戲崩潰，須由玩家重啟遊戲且無法保存任何遊玩資料。

### System Environment
作業系統:
> * Windows 7、Windows 8、Windows 8.1或Windows 10以上版本
> * OS X Mavericks 10.9 以上版本
> * Ubuntu 14.04、Debian 8、openSUSE 13.3以上版本

硬體要求: Intel Pentium 4 以上版本
瀏覽器: Google Chrome 64.0

---

## Class Diagram
* ![](https://i.imgur.com/k4v0YEg.png)
---

## User Interface
### 玩家操作
* 方向鍵左鍵: 方塊向左移
* 方向鍵右鍵: 方塊向右移
* 方向鍵下鍵: 方塊向下移
* 方向鍵上鍵: 方塊順時針選轉90度
* Space鍵: 方塊直接下降到底層
### 遊戲進行畫面
* 左邊顯示玩家遊玩畫面
* 右邊顯示下一個方塊圖形、目前分數跟最高分數
遊戲起始畫面
![](https://i.imgur.com/Ux16UZp.png)
遊戲遊玩畫面
![](https://i.imgur.com/wq9ue6l.png)

---

## 組員分工
* 洪昱翔
架構設計、程式統整、碰撞
* 廖晨竹
方塊操作、按鍵輸入及判斷
* 楊宗儒
html設計、介面優化、分數計算
* 黃政維
遊戲結束判斷、方塊消除
---
