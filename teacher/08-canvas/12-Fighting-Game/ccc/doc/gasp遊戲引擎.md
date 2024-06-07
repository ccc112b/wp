

參考 －－ https://greensock.com/get-started/

```js
    document.querySelector('#playerHealth').style.width = enemy.health + "%"
    // gsap.to("#playerHealth", {width: player.health + "%"})
```

本遊戲其實沒什麼用到遊戲引擎，只是用 gasp 來顯示血量，完全可以改成用 js 直接顯示血量就好

所以我在 step3 當中拿掉了遊戲引擎 gasp
