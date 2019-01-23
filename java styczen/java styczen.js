let body = document.getElementById("body");
//console.log("body");
// pierwszy bblock - text
let text = document.createTextNode("hihihihi hellow world");
body.appendChild(text);
let paragraph = document.createElement("p");
let paragraphcontent = document.createTextNode("przybyli ulani pod kościuł papierze");
// kolejność nie ma znaczenia najpierw dodano zawartość a potem kontent
paragraph.appendChild(paragraphcontent);
body.appendChild(paragraph);



// łatwe tworzenie ale morze nie 

let paragraph2 = document.createElement("p");
paragraph2.textContent = "treść ale łatweo lolokokoi";
body.appendChild(paragraph2);

////////////////////////////////////////
// wstawiNIE GDZIE SIĘ CHCE ////////////
// insertbefore //
// insertafter  //
// 2 parametry 
// istniejący lub nowy
 let paragraph3 = document.createElement("p");
 paragraph3.textContent = "woooololwowlwolwowlwo";
 body.insertBefore(paragraph3,paragraph)
 body.removeChild(text)
 let paragraph4 = document.createTextNode("paratgrafowsanieee")
 body.replaceChild(paragraph4,paragraph3)