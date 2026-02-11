const products=[
"Big Flange TVS",
"Flange Small TVS King",
"Flange",
"Pivot Pin",
"Rear Axle",
"Front Axle TVS King",
"TVS King Clutch Plate",
"Slider Set",
"Three Wheeler Pivot Pin"
];

const descriptions={
"Big Flange TVS":"High durability flange designed for TVS three wheelers.",
"Flange Small TVS King":"Precision engineered flange for smooth performance.",
"Flange":"Heavy duty flange built with high-grade material.",
"Pivot Pin":"Strong pivot pin ensuring stable suspension.",
"Rear Axle":"Durable rear axle offering high load capacity.",
"Front Axle TVS King":"Premium front axle providing balanced steering.",
"TVS King Clutch Plate":"High friction clutch plate delivering smooth power.",
"Slider Set":"Wear resistant slider set for extended durability.",
"Three Wheeler Pivot Pin":"Heavy duty pivot pin for commercial use."
};

const grid=document.getElementById("productGrid");

products.forEach(product=>{
let card=document.createElement("div");
card.className="product-card";
card.innerText=product;
card.onclick=()=>openModal(product);
grid.appendChild(card);
});

const modal=document.getElementById("productModal");
const modalTitle=document.getElementById("modalTitle");
const modalImage=document.getElementById("modalImage");
const modalDescription=document.getElementById("modalDescription");

function openModal(product){
modal.style.display="block";
modalTitle.innerText=product;
modalImage.src=`images/${product.toLowerCase().replace(/ /g,'-')}.jpg`;
modalDescription.innerText=descriptions[product];
}

document.querySelector(".close").onclick=()=>modal.style.display="none";
window.onclick=e=>{ if(e.target==modal) modal.style.display="none"; };
