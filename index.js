let word = 'random';
const input = document.querySelector('.input');
const cross = document.querySelector('.cross');
const mag = document.querySelector('.mag');
// Получаем изображения
async function getInfo() {
   const information = await fetch(`https://api.unsplash.com/search/photos?query=${word}&per_page=30&extras=url_m&orientation=landscape&client_id=ztaXHAv9liSB6pPIfSpUEXe42MptozHs7v2kNqqX4hM`)
   .then(response => response.json()); 
   showInfo(information);
};
getInfo();

// Собираем галерею
function showInfo(info) {
   const gallery = document.querySelector('.gallery-inner');
   gallery.innerHTML = '';
   info.results.map((item) => {
      const div = document.createElement('div');
      div.classList.add('image');
      div.style = `background-image: url(${item.urls.small})`
      gallery.appendChild(div)
   })
};

document.onkeydown = (e) => {
   if (e.code === 'Enter') {
      word = input.value;
      getInfo();
   };
}

cross.addEventListener('click', () => input.value = '');
mag.addEventListener('click', () => {
   word = input.value;
   getInfo();
});
