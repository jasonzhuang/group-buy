/**
 * Created with JetBrains WebStorm.
 * User: jason
 * To change this template use File | Settings | File Templates.
 */
app.directive('dealOver',function(){
    return{
        restrict:'A',
        link:function(scope, elem, attrs){
           elem.bind('mouseenter',function(){
               scope.dealOver = true;
               scope.dealOut = false;
               //elem.css({"opacity":0.9,"display":"block"});
           });

           elem.bind("mouseleave", function(){
               scope.dealOver = false;
               scope.dealOut = true;
               //elem.css({"opacity":0,"display":"none"});
           })
        }
    }
})