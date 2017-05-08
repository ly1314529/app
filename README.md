# app


* 如何生成一个app？具体请看[官网](http://ionicframework.com/getting-started/)
  
    * npm install -g cordova ionic    
    * ionic platform add ios/android   
    * ionic build android   //生成的app可直接下载
 
 
 * 关于更新图标问题
    * 将图标放在resource文件下，改后缀名为.ai
    * ionic resource   //目标文件夹即可生成相应文件
    
     
     
     
     
 * 此时你的目录下比较重要的就是
     
  
  ```
     www/index.html
     www/js/app.js
     www/js/service.js
     www/js/controller.js
     
 ```
     
    
  * www/js/app.js
     
     
```javascript
     
   angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])  //starter.controllers就是下面的controller文件，           //starter.services就是service文件，必要
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
    
  * config.xml是用来配置android/ios选项
 
   
   
