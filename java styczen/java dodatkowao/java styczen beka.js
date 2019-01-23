let lista = document.getElementById("lista");
let remove = document.getElementById("remove");
lista.removeChild(remove)
let dodanie = document.getElementById("dodanie")
let nevalue =document.createElement("li")
nevalue.textContent ="nowa zawartość"
lista.replaceChild(nevalue,dodanie)
let pierwsze = document.getElementById("pierwsze")
lista.removeChild(pierwsze)
lista.insertBefore(pierwsze,nevalue)