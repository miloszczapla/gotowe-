let body = document.getElementById("body")
let h1 = document.createElement("h1")
h1.textContent = "lista uczestników szkooooooooooooooolenia:"
body.appendChild(h1)
let ul = document.createElement("ol")
let li_1 = document.createElement("li")
let li_2 = document.createElement("li")
let li_3 = document.createElement("li")
let li_4 = document.createElement("li")
li_1.textContent = "pierwszy"
li_2.textContent = "drugi"
li_3.textContent = "dritte"
li_4.textContent = "four"
ul.appendChild(li_1)
ul.appendChild(li_2)
ul.appendChild(li_3)
ul.appendChild(li_4)

body.appendChild(ul)

li_1.style.color = "red"
li_1.style.backgroundColor = "blue"