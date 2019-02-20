function budzik() {
    document.writeln("dzwoni budzik")
}
function prysznic() {
    document.writeln("biore prysznic")
}
function malowanie() {
    document.writeln("maluję się")
}
function golenie() {
    document.writeln("golę się")
}
plec = window.prompt("podaj plec: \"kobieta\" albo \"mężczyzna\"")
wiek = parseInt(window.prompt("podaj wiek"))
function kolożycia(){
    if (plec=="kobieta" && wiek > 16){
        malowanie()
    }
    else if(plec=="miłosz" && wiek > 16){
        golenie()
    }
}
function sniadanie() {
    document.writeln("jem śniadanie")
}
let dzien_tygodnia = new Date().getDay()
let day;
switch (dzien_tygodnia) {
    case 0:
      day = "niedziela";
      break;
    case 1:
      day = "poniedziałek";
      break;
    case 2:
       day = "wtorek";
      break;
    case 3:
      day = "środa";
      break;
    case 4:
      day = "czwartek";
      break;
    case 5:
      day = "piatek";
      break;
    case 6:
      day = "sobota";
  }
function data() {
    document.writeln(day)
}                          
let liczba = parseInt(window.prompt("podaj liczbę"))
if (liczba % 2 == 0) {
    document.writeln("liczba jest parzysta")
}
else {
    document.writeln("liczba nie jest parzysta")
}
let cyfra = 0
function literacja(){
    for (var i = 0;i < 10000;i++) {
       cyfra=i
       document.writeln(cyfra)
    
    }
}
function literacja(){
    for (var i = 0;i < 10000;i++) {
        document.writeln(i)
        if(i % 2 == 0){
        document.writeln("jest parzysta","<br>")
        }
        else {
        document.writeln("nie jest parzysta","<br>")
        }
    }
}