
//window.onload=
function myFunction1() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var dx = -2;
    var dy = -2;
    var ballRadius = 10;
    var balls = [];
    var speed = 10;
    var paused = true;
    var timer=null;
    function randNum(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createBall(location) {
       // debugger;
        balls.push({
            x: location.x,
            y: location.y,
            dx: randNum(-speed, speed),
            dy: randNum(-speed, speed)
        });

    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (i = 0; i < balls.length; i++) {
            var ball = balls[i];
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
            ctx.fillStyle = "#3399ff";
            ctx.fill();
            if (ball.y + ball.dy < 0 || ball.y + ball.dy > canvas.height) {
                ball.dy = -ball.dy;
            }
            if (ball.x + ball.dx < 0 || ball.x + ball.dx > canvas.width) {
                ball.dx = -ball.dx;
            }
            ball.x += ball.dx;
            ball.y += ball.dy;
        }
        ctx.closePath();

    }

    document.getElementById('canvas').onmousedown = function (e) {
        //debugger;
        console.log(canvas.getBoundingClientRect().left);
        var location = {
            x: e.pageX - canvas.getBoundingClientRect().left,
            y: e.pageY - canvas.getBoundingClientRect().top

        };
        console.log(location);
        createBall(location);
    };


    document.getElementById("slider").onclick = function () {
        //debugger;
        //console.log(document.getElementById("myRange").value);

        speed = document.getElementById("myRange").value;
       // setInterval(draw, 9000);

    };
    document.getElementById("pausebtn").onclick= function () {
        //debugger;
        clearInterval(timer);
        timer = null;
        //setInterval(draw,0);

    }
    document.getElementById("resumebtn").onclick= function () {
        //debugger;
        if (timer !== null) return;
        timer = setInterval(draw, speed);


    }

   timer= setInterval(draw, speed);


}


