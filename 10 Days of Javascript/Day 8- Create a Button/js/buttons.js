function doit() {
    //getting current value written on button i.e. 0
    var val = document.getElementById("btn").innerHTML;
    //parsing value from string to int
    var nval = parseInt(val);
    //rewriting value to button with pre increment
    document.getElementById("btn").innerHTML = ++nval;           
}
