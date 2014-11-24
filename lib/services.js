angular.module('serviceDemo', [])
.factory('myService', function () {//创建theService服务
  return{
         test:function(){
              var str='wangjt（来自services的问候）';
              return str;
         }
       }
});