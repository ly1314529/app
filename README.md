# app


* 如何生成一个app？具体请看[官网](http://ionicframework.com/getting-started/)
  
     
   * npm install -g cordova ionic    //下载这个官方包
     
     
     此时你的目录下比较重要的就是
     
     
     ```
     www/index.html
     www/js/app.js
     www/js/service.js
     www/js/controller.js
     
     ```
     
    
    *  www/js/app.js
     
     
  ```javascript
     
     angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])  //starter.controllers就是下面的controller文件，       //starter.services就是service文件，必要
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

```
