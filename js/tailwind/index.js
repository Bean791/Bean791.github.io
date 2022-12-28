const karya = document.querySelector('#karya')
console.log(hasil)
const data = hasil()
data.forEach((item)=>{
    console.log(item)
    const {url,Judul, Gambar} =item
    const card = document.createElement('a')
    card.href = url
    card.innerHTML =
    `
    <img src=${Gambar} class="rounded-2xl hover:bg-empat hover:p-2 lg:mx-3 duration-700 scale-90 hover:scale-110" alt=${Judul} />
    `
    karya.appendChild(card)
})
