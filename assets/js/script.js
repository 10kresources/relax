const container = document.getElementById('container');
const text = document.getElementById('text');

// const totalTime = 7500;
// const breatheTime = (totalTime / 5) * 2;
// const holdTime = totalTime / 5;


const breatheTime = 4000;
const holdTime = 7000;
const totalTime = 19000;

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

const showTimer = () => {
    window.setInterval((function(){
        var start = Date.now();
        var textNode = document.createTextNode('1');
        document.getElementById('text').appendChild(textNode);
        return function() {
             textNode.data = Math.floor((Date.now()-start)/1000 + 1);
             };
        }()), 1000);
}

breathAnimation();

function breathAnimation() {
  text.innerText = 'Inhale ';
  container.className = 'mcontainer grow';
  showTimer();
  setTimeout(() => {
    text.innerText = 'Hold ';
    showTimer();
    setTimeout(() => {
      text.innerText = 'Exhale ';
      showTimer();
      container.className = 'mcontainer shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);


