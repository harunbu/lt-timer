# LT発表用タイマー

node.jsで動く、5分（最大7分まで延長）のLT用のタイマーです。

## 使い方

依存ライブラリインストール

```
npm install
```

サーバー起動

```
npm run serve [ポート番号（省略で3000）]
```

`/`：タイマー画面表示  
`/operator`：操作画面表示

## サウンド

+ 開始時：ゴング（1回）
+ 4分経過時：拍子木
+ 5分経過時：ゴング（複数回）
+ 7分経過時：銅鑼

が鳴ります。

## ゲージ

+ 開始～2分30秒：青
+ 2分30秒～4分00秒：オレンジ
+ 4分00秒～5分00秒：赤

に色が変わります。（5分以降は表示は変わりません）

## 素材

以下の素材サイトのサウンドファイルを利用しています。

効果音ラボ  
https://soundeffect-lab.info/
