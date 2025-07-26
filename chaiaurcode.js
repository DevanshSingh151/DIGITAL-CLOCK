const clock=document.getElementById('clock');
//It is as same the given below it can be written in both the ways
//const clock=document.querySelector('#clock');

setInterval(function(){
  let date=new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();

},1000)
