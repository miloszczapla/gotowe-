let image1 = document.createElement("img")
image1.src = "https://cdn.britannica.com/s:300x500/94/152294-131-DC3E25DB.jpg"
image1.width = 300;
image1.height = 200;
image1.style.margin= 20;
document.body.appendChild(image1)


function wstawpapugę()
{
    let video = document.createElement("video")
    video.src = "http://aplikacje.vector.org.pl/css/vid.mp4"
    video.width = 300;
    video.height = 200;
    video.controls = true;
    video.autoplay = "autoplay";
    video.loop = true;
    document.body.appendChild(video)
}
function wstawpsa()
{
    let image2 =document.createElement("img")
    image2.src="https://piesologia.pl/wp-content/uploads/2018/01/food-aggression.jpg"
    image2.width=150;
    image2.height=250;
    document.body.appendChild(image2)
}
function niebieski()
{
    document.body.style.backgroundColor = "blue" 
}
function czerwony()
{
    body.style.backgroundColor = "red" 
}
function zielony()
{
    body.style.backgroundColor = "green" 
}