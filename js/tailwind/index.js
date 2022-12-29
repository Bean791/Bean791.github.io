const karya = document.querySelector('#karya')
const data = hasil()
// data.forEach((item)=>{
//     const {url,Judul, Gambar} =item
//     const card = document.createElement('a')
//     card.href = url
//     card.innerHTML =
//     `
//     <img src=${Gambar} class="rounded-2xl hover:bg-empat hover:p-2 lg:mx-3 duration-700 scale-90 hover:scale-110" alt=${Judul} />
//     `
//     karya.appendChild(card)
// })

// lopping data cuma dari id 1-5
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
