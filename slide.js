const data=[
{
    id :1,
    print:"Lepidoptera",
    img:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Common_Grass_Yellow_%28Eurema_hecabe%29_in_Kawal_WS%2C_AP_W_IMG_1784.jpg",
    text:"Lepidoptera is an order of insects that includes butterflies and moths (both are called lepidopterans). About 180,000 species of the Lepidoptera are described, in 126 families[1] and 46 superfamilies,[2] 10 percent of the total described species of living organisms.[2][3] It is one of the most widespread and widely recognizable insect orders in the world.[4] The Lepidoptera show many variations of the basic body structure that have evolved to gain advantages in lifestyle and distribution. Recent estimates suggest the order may have more species than earlier thought,[5] and is among the four most species-rich orders, along with the Hymenoptera, Diptera, and Coleoptera.[4]",


},

{
    id :2,
    print:"Monarch-butterfly",
    img:"https://www.science-sparks.com/wp-content/uploads/2022/04/Monarch-butterfly-1024x683.jpeg",
    text:"The most amazing thing about monarch butterflies is the enormous migration that North American monarchs undertake each year. Every fall, as cold weather approaches, millions of these delicate insects leave their home range in Canada and the United States and begin flying south. They continue until they reach Southern California or central Mexico, nearly 2,500 miles away!"


},
{
    id :3,
    print:"Large white",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Large_White._Pieris_brassicae_-_Flickr_-_gailhampshire_%281%29.jpg/220px-Large_White._Pieris_brassicae_-_Flickr_-_gailhampshire_%281%29.jpg",
    text:"The large white is a strong flier and the British population is reinforced in most years by migrations from the continent. Scattered reports of the large white from the north-eastern United States (New York, Rhode Island and Maine) over the past century are of a dubious nature and indicate either accidental transport or intentional release. Such introductions threaten to establish this agricultural pest in North America. ",
},
{
    id :4,
    print:"Cabbage white",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Cabbage_White_Butterfly_%28Pieris_rapae%29.jpg/1024px-Cabbage_White_Butterfly_%28Pieris_rapae%29.jpg",
    text:"Pieris rapae is a small- to medium-sized butterfly species of the whites-and-yellows family Pieridae. It is known in Europe as the small white, in North America as the cabbage white or cabbage butterfly, on several continents as the small cabbage white, and in New Zealand as the white butterfly.",
},
{
    id :5,
    print:"Cotesia glomerata",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Braconidae_-_Cotesia_glomerata_-_Cocoons.JPG/800px-Braconidae_-_Cotesia_glomerata_-_Cocoons.JPG",
    text:"The adults of Cotesia glomerata can reach a length of 3–7 millimetres (0.12–0.28 in). This small braconid wasp is black, with two pairs of wings. It can parasitize a wide range of Pieris butterfly species as host, but the large white (Pieris brassicae) and small white (Pieris rapae) are the main hosts. The adults feed on nectar.",
},
];

const img = document.querySelector("#pic");
const btnleft = document.querySelector("#btnleft");
const btnright = document.querySelector("#btnright");
const role = document.querySelector("#role");
const text = document.querySelector("#text");

let index = 0;
window.addEventListener("DOMContentLoaded",function() {
    const testimonial = data[0];
    load(testimonial);
});

function load(data){
img.src = data.img;
role.innerHTML= data.print;
text.innerHTML = data.text
};

btnright.addEventListener("click",function(){
index++;
if(index > data.length - 1){
index = 0;
}
load(data[index]);
});

btnleft.addEventListener("click",function(){
index--;
if(index < 0){
index = data.length-1;
}
 load(data[index]);
});





























