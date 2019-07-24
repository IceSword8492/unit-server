# Unit-Server

![BUILDSTATUS](https://img.shields.io/badge/build-passing-success.svg) ![VERSION](https://img.shields.io/badge/version-1.0.5r-blightgreen.svg) ![DOCUMENT](https://img.shields.io/badge/documents-available-blue.svg)

## 概要

CLIゲーム「Unit」のデータベースサーバー向けプロジェクトです。

## APIの使用法

C言語から扱いやすいようにURIは短く、メソッドはGETのみとなっています。

### データの登録

scoreが1以上の場合のみ成功します。

```http
host/push?name=<name:string>&score=<score:int>
```

### データ取得

上位10件のデータを返します。

```http
host/load
```

#### response

> \<name:string>:\<score:int>  
> \<name:string>:\<score:int>  
> \<name:string>:\<score:int>  
> \<name:string>:\<score:int>  
> \<name:string>:\<score:int>  
> \<name:string>:\<score:int>  
> \<name:string>:\<score:int>  
> \<name:string>:\<score:int>  
> \<name:string>:\<score:int>  
> \<name:string>:\<score:int>  

<s>
### データベース初期化

tokenは1分毎に変化します。

```http
host/clear?token=<token:string>
```
</s>


### 削除

データを削除します。
`names`または`name`を指定しない場合全削除を実行します。

```http
host/delete

host/delete?names=<name:string>[,<name:string>]...

host/delete?name=<name:string>
```


### テスト

ダミーデータを返します。

```http
host/test
```

### スクリプトとして取得

```http
host/script
```

#### Response
```js
var data = [
    {"name": <name:string>, "score": <score:int>},
    {"name": <name:string>, "score": <score:int>},
    {"name": <name:string>, "score": <score:int>},
    {"name": <name:string>, "score": <score:int>},
    {"name": <name:string>, "score": <score:int>},
    {"name": <name:string>, "score": <score:int>},
    {"name": <name:string>, "score": <score:int>},
    {"name": <name:string>, "score": <score:int>},
    {"name": <name:string>, "score": <score:int>},
    {"name": <name:string>, "score": <score:int>}
];
```