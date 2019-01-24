let całkowita = 2;
let niecałkowita =1/4;
let mnożenie =7*10^7
let wykrzyknik = "!"
let pat = "nie"
let tekst ="C:\\TEMP"
let nic = "null";
console.log(całkowita);
console.log(niecałkowita);
console.log(mnożenie);
console.log(wykrzyknik);
console.log(pat);
console.log(tekst);
console.log(nic);
// 2


    let first = window.prompt("pierwsza liczba")
    let second = window.prompt("druga liczba")
    first = parseInt(first)
    second = parseInt(second)
    function dodawanie()
    {
       window.alert("pierwsza liczba + druga liczba = "+ (first+second));
    }
    function odejmowanie()
    {
      window.alert("pierwsza liczba - druga liczba = "+ (first-second));
    }
    function dzielenie()
    {
       window.alert("pierwsza liczba / druga liczba = "+ (first/second));
    }
    function mnożenie2() {
        window.alert("pierwsza liczba * druga liczba = " + (first * second));
    }
    function oblicz() {
        let a = document.getElementById("a").value;
        a = parseInt(a);
        let b = document.getElementById("b").value;
        b = parseInt(b);
        let dodawanie=("A + B = "+ (a+b));
        let odejmowanie=("A - B = "+ (a-b));
        let mnożenie=("A * B = "+ (a*b));
        let dzielenie=("A / B = "+ (a/b));
        let black = document.getElementById("black")
        document.write(dodawanie,"<br>",odejmowanie,"<br>",mnożenie,"<br>",dzielenie)

      }
    function funkcja() {
        let z = document.getElementById("z").value;
        z = parseInt(z);
        let x = document.getElementById("x").value;
        x = parseInt(x);
        let c = document.getElementById("c").value;
        c = parseInt(c);
        let delta = ((x^2+(-4*z*c)))

        
    }
    
