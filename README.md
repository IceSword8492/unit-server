# Unit-Server

![BUILDSTATUS](https://img.shields.io/badge/build-passing-success.svg) ![VERSION](https://img.shields.io/badge/version-1.0.1r-blightgreen.svg) ![DOCUMENT](https://img.shields.io/badge/documents-available-blue.svg)

## 概要

CLIゲーム「Unit」のデータベースサーバー向けプロジェクトです。

## APIの使用法

C言語から扱いやすいようにURIは短く、メソッドはGETのみとなっています。

### データの登録

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

### データベース初期化

tokenは1分毎に変化します。

```http
host/clear?token=<token:string>
```

### テスト

ダミーデータを返します。

```http
host/test
```