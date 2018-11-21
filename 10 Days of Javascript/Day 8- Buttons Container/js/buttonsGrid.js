function doit() {
    var n1 = document.getElementById("btn1").innerHTML;
    var n2 = document.getElementById("btn2").innerHTML;
    var n3 = document.getElementById("btn3").innerHTML;
    var n6 = document.getElementById("btn6").innerHTML;
    var n9 = document.getElementById("btn9").innerHTML;
    var n8 = document.getElementById("btn8").innerHTML;
    var n7 = document.getElementById("btn7").innerHTML;
    var n4 = document.getElementById("btn4").innerHTML;
    var ar = [n1, n2, n3, n6, n9, n8, n7, n4];
    var tmp = ar[ar.length-1];
    for(var i=ar.length-1; i>=0; i--) {
        ar[i] = ar[i-1];
    }
    ar[0] = tmp;
    document.getElementById("btn1").innerHTML = ar[0];
    document.getElementById("btn2").innerHTML = ar[1]; 
    document.getElementById("btn3").innerHTML = ar[2];
    document.getElementById("btn6").innerHTML = ar[3];
    document.getElementById("btn9").innerHTML = ar[4];
    document.getElementById("btn8").innerHTML = ar[5];
    document.getElementById("btn7").innerHTML = ar[6];
    document.getElementById("btn4").innerHTML = ar[7];
    
}
