const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const createImgGallery = pictureInfo => {

  const createEl = document.createElement('li');

  const createImgEl = document.createElement("img");
  createImgEl.src = pictureInfo.url;
  createImgEl.alt = pictureInfo.alt;
  createImgEl.style.width = "100%";
  createImgEl.style.height = "100%";
  createEl.append(createImgEl);

  return createEl;
}


const imgGalleryArr = images.map(image => createImgGallery(image));

const imgGallery = document.querySelector('.gallery')

imgGallery.append(...imgGalleryArr);

console.log(imgGallery);



imgGallery.style.width = "1440px";
imgGallery.style.height = "848px";
imgGallery.style.display = "flex";
imgGallery.style.flexWrap = "wrap";
imgGallery.style.gap = "24px";
imgGallery.style.justifyContent= "center";
imgGallery.style.paddingTop = "100px";


const imgStyle = [...imgGallery.children];

imgStyle.forEach( li => {
  li.classList.add("img-style")}
);

console.log(imgStyle)
