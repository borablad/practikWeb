let max = 100;
let min = 0;
let middle = Math.floor((min+max)/2);

let stage = 1;

function Start() {
    max = 100;
    min = 0;
    middle = Math.floor((min+max)/2);

    stage = 1;
    document.getElementById("img_main").src="/img/1111.png";

    document.getElementById("startText").classList.toggle("higheBlock");
    document.getElementById("startButton").classList.toggle("higheBlock");

    document.getElementById("qustion").classList.toggle("higheBlock");
    document.getElementById("small").classList.toggle("higheBlock");
    document.getElementById("bingo").classList.toggle("higheBlock");
    document.getElementById("big").classList.toggle("higheBlock");

    document.getElementById("qustion").innerHTML = "Это число... " + middle;
}

function smallClick() {
    max = middle;

    middle = Math.floor((min+max)/2);
     if(max == middle){
         middle -=1;
     }

     checkGame();
}

function bigClick() {
    min = middle;

    middle = Math.floor((min+max)/2);
     if(min == middle){
         middle +=1;
     }

     checkGame();
}

function bingoClick() {
    max = middle;
    min = middle;

    checkGame();
}

function checkGame() {
    if(min == max) {
        document.getElementById("qustion").innerHTML = "Это число " + min + " !!!";

        document.getElementById("small").classList.toggle("higheBlock");
        document.getElementById("bingo").classList.toggle("higheBlock");
        document.getElementById("big").classList.toggle("higheBlock");

        return;
    }
    stage += 1;
    if(stage > 7) {
        document.getElementById("qustion").innerHTML = "Это не честно !!!";
        document.getElementById("img_main").src="/img/2222.png";
        
        document.getElementById("small").classList.toggle("higheBlock");
        document.getElementById("bingo").classList.toggle("higheBlock");
        document.getElementById("big").classList.toggle("higheBlock");
    }else
        document.getElementById("qustion").innerHTML = "Это число... " + middle + "( " + stage + " )";
}

function rand(max) {
    return Math.floor(Math.random() * max);
}

let a = rand(10);
let b = rand(10);
let c = rand(10);
let step = 1;
let win = 0;

function mathStart() {

    document.getElementById("mathStartButton").classList.toggle("higheBlock");

    document.getElementById("mathButton1").classList.toggle("higheBlock");
    document.getElementById("mathButton2").classList.toggle("higheBlock");
    document.getElementById("mathButton3").classList.toggle("higheBlock");

    document.getElementById("mathText").innerHTML = String(a) + " + " + String(b) + " = ";

    switch (rand(3)) {
        case 0:
            document.getElementById("mathButton1").innerHTML = a + b;
            document.getElementById("mathButton2").innerHTML = a + c;
            document.getElementById("mathButton3").innerHTML = c + b;
          break;
        case 1:
            document.getElementById("mathButton2").innerHTML = a + b;
            document.getElementById("mathButton3").innerHTML = a + c;
            document.getElementById("mathButton1").innerHTML = c + b;
          break;
        case 2:
            document.getElementById("mathButton3").innerHTML = a + b;
            document.getElementById("mathButton2").innerHTML = a + c;
            document.getElementById("mathButton1").innerHTML = c + b;
          break;
      }
}

function sendMath() {
    a = rand(10);
    b = rand(10);
    c = rand(10);

    document.getElementById("mathText").innerHTML = String(a) + " + " + String(b) + " = ";

    switch (rand(3)) {
        case 0:
            document.getElementById("mathButton1").innerHTML = a + b;
            document.getElementById("mathButton2").innerHTML = a + c;
            document.getElementById("mathButton3").innerHTML = c + b;
          break;
        case 1:
            document.getElementById("mathButton2").innerHTML = a + b;
            document.getElementById("mathButton3").innerHTML = a + c;
            document.getElementById("mathButton1").innerHTML = c + b;
          break;
        case 2:
            document.getElementById("mathButton3").innerHTML = a + b;
            document.getElementById("mathButton2").innerHTML = a + c;
            document.getElementById("mathButton1").innerHTML = c + b;
          break;
      }
      checkMathGame();
}

function math1() {
    if(document.getElementById("mathButton1").innerHTML == String(a + b)) {
        win+=1;
    }
    step+=1;

    sendMath();
}

function math2() {
    if(document.getElementById("mathButton2").innerHTML == String(a + b)) {
        win+=1;
    }
    step+=1;
    console.log(win);

    sendMath();
}

function math3() {
    if(document.getElementById("mathButton3").innerHTML == String(a + b)) {
        win+=1;
    }
    step+=1;

    sendMath();
}

function checkMathGame() {
    if(step>7) {
        step-=1;
        document.getElementById("mathText").innerHTML = "Вы набрали ( " + win + " из " + step + " ) это " + Math.floor((win*5)/step);

        document.getElementById("mathStartButton").classList.toggle("higheBlock");

        document.getElementById("mathButton1").classList.toggle("higheBlock");
        document.getElementById("mathButton2").classList.toggle("higheBlock");
        document.getElementById("mathButton3").classList.toggle("higheBlock");

        step = 1;
        win = 0;
    }
}