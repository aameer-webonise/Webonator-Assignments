for(var i=1;i<=100;i++){
document.write(((i%3==0&&i%5==0)?"foobar":(i%3==0)?"foo":(i%5==0)?"bar":i)+"<br>");
}
