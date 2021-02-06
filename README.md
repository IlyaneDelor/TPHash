# Product Name
> Short blurb about what your product does.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

One to two paragraph statement about your product and what it does.

![](header.png)

## Installation
All the file are in the Projects, but I use this command to have them.

```sh
npm install crypto-js
```
```sh
npm install javascript-blowfish
```
```sh
npm install md5js

```
Download Jsencryp.js and jsencypt.min.js on my Github too and add them to your Js folder.

## Usage example

Follow instruction on Web Pages to encrypt and decrypt your message.

Put your message in the correct input and click the button.

For AES,RSA, and BlowFish don't forget to put your key or keys.

_For more examples and usage, please refer to the [Wiki][wiki]._

## Development setup for RSA

=======================
This library should work hand-in-hand with openssl.  With that said, here is how to use this library.

 - Within your terminal type the following.

```
openssl genrsa -out rsa_1024_priv.pem 1024
```

 - This generates a private key, which you can see by doing the following...

```
cat rsa_1024_priv.pem
```

 - You can then copy and paste this in the Private Key section of within index.html.
 - Next, you can then get the public key by executing the following command.

```
openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem
```

 - You can see the public key by typing...

```
cat rsa_1024_pub.pem
```

 - Now copy and paste this in the Public key within the RSA.html.
 - Now you can then convert to and from encrypted text by doing the following in code.

## Release History

* 0.2.1
    * CHANGE: Update docs (module code remains unchanged)
* 0.2.0
   
    * ADD: Upload and Compare stuffs
* 0.1.0
    * The first proper release
    * MD5, SHA2-256, SHA3-512, KECCAK-512, RipeMD160, AES,RSA and BlowFish
* 0.0.1
    * Work in progress

## Meta

DELOR Ilyane – [@ilyane_delor](https://twitter.com/ilyane_delor) – ilyanedelor7@gmail.com


[https://github.com/IlyaneDelor](https://github.com/IlyaneDelor)

