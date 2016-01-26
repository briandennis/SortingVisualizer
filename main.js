var container = document.getElementById('sort');

var prompt = document.createElement('h2')
var instruction = document.createTextNode('Select a Sort To Continue');
prompt.appendChild(instruction);
prompt.id = 'prompt';

container.appendChild(prompt);

generateBars();

function generateBars(){
  var alreadySeen = [];
  var bars = [];
  var done = false;
  while(!done){
    var currNum = Math.round(Math.random() * 100);
    if(alreadySeen.indexOf(currNum) < 0){
      alreadySeen.push(currNum);

      var bar = document.createElement('div');
      bar.style.width = '1%';
      bar.style.height = currNum.toString() + "%";
      bar.id = currNum;
      console.log("new bar of height: " + currNum.toString() + "px");
      bar.style.background = '#B8D8BA';
      bars.push(bar);

      if(bars.length >= 100){
        done = true;
      }
    }
  }
  container.innerHTML = '';
  for(var i = 0; i < bars.length; i++){
    container.appendChild(bars[i]);
    console.log("added bar " + i);
  }
}
