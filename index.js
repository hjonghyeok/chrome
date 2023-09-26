i = 1
setInterval(() => {
  let imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    img.src = "https://jmagazine.joins.com/_data2/photo/2021/06/2041357502_NaHtbiAJ_1.jpg"
  })
    i++
}, 500)