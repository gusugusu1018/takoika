(function() {
    'use strict';
    var stage = document.getElementById('stage');
    if (typeof stage.getContext === 'undefined') {
        return;
    }
    var context = stage.getContext('2d');

    // For window resolution
    var dpr = window.devicePixelRatio || 1;
    var width = window.innerWidth;
    var height = window.innerHeight-50;
    stage.width = width * dpr;
    stage.height = height * dpr;
    context.scale(dpr,dpr);
    stage.style.width = width;
    stage.style.height = height;

    // Police Car
    const policeCarImg = new Image();
    policeCarImg.src = '../img/policeCar.png';
    var move = width;
    var carSize = width/5;
    
    // Emergence Takoika
    const takoikaImg = new Image();
    takoikaImg.src = '../img/takoika1.png';
    var angle =0;
    var takoikaMove;
    var takoikaSizeX = width/1.3;
    var takoikaSizeY = width/2;
    function render() {
        context.clearRect(0,0,width,height);
        context.drawImage(takoikaImg,width/2,takoikaMove,takoikaSizeX,takoikaSizeY);
        angle += 1/5 * Math.PI/180;
        takoikaMove = height + takoikaSizeY*Math.cos(angle);
        if (move > -carSize-1) {
            context.drawImage(policeCarImg,move,height/3,carSize,carSize);
            move--;
        }
        setTimeout(render, 1);
    }
    policeCarImg.onload = function() {
        takoikaImg.onload = function() {
            render();
        }
    }
})();