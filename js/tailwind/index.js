const karya = document.querySelector('#karya')
const data = hasil()
const wadah = document.querySelector('#wadah')
for (let i = 0; i < 5; i++) {
    const {url,Judul, Gambar} = data[i]
    const card = document.createElement('a')
    card.href = url
    card.innerHTML =
    `
    <img src=${Gambar} class="rounded-2xl hover:bg-empat hover:p-2 lg:mx-3 duration-700 scale-90 hover:scale-110" alt=${Judul} />
    `
    karya.appendChild(card)
}
karya.innerHTML += `<a href="https://bean791.github.io/Karya.html" class="text-2xl text-center text-white hover:text-dua hover:scale-110 duration-700 my-auto text-empat">Lihat Semua</a>`

const pilihan = document.querySelector('#pilihan')
const nav = document.getElementById('nav')
pilihan.addEventListener('click',()=>{
    nav.classList.toggle('hidden')
    pilihan.classList.toggle('nyala')
})

const tombol = document.getElementById('tombol')
const html = document.querySelector('html')
tombol.addEventListener('click',()=>{
    html.classList.toggle('dark')
})
