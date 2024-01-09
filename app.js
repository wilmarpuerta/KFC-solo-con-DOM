let root = document.getElementById('root');

// Container
let container = document.createElement('div');
container.classList.add("container");
root.appendChild(container);

// Row 
let row = document.createElement('div');
row.classList.add("row");
container.appendChild(row);

// Columna
let col = document.createElement('div');
col.classList.add("col-md-3", "col-sm-6", "mt-5");
row.appendChild(col);

// Card
let card = document.createElement('div');
card.classList.add("card", "h-100");
col.appendChild(card);

// Img
let img = document.createElement('img');
img.classList.add("img-fluid");
img.src = "https://cdn.pixabay.com/photo/2023/11/30/07/04/shetland-sheepdog-8420917_1280.jpg";
card.appendChild(img);