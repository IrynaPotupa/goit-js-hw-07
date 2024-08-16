const items = document.querySelector(`#categories`);
console.log(`Number of categories: ${items.children.length}`);

const itemsDescription = document.querySelectorAll(`.item`);

itemsDescription.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});


items.style.listStyle = "none";
items.style.width = "440px";
items.style.height = "888px";
items.style.color = "rgba(46, 47, 66, 1)";
items.style.backgroundColor = "rgba(246, 246, 254, 1)";

const itemList = document.querySelectorAll(".item");

itemList.forEach( item =>{
item.style.width ="292px";
item.style.height = "264px";
item.lastElementChild.style.listStyle = "none";
item.lastElementChild.style.padding = "0";


const liItem = [...item.lastElementChild.children];

liItem.forEach( li =>{
li.classList.add("item-style")})
}
);


