const karya = document.querySelector('#karya')
const data = hasil()
for (let i = 0; i < 6; i++) {
    const {url,Judul, Gambar} = data[i]
    const card = document.createElement('div')
    card.classList.add('col-md-4')
    card.classList.add('my-3')
    card.classList.add('rounded-top')
    card.innerHTML =
    // bootstrap
    `
    <a href=${url} class="card text-decoration-none text-danger" style="width: 18rem;">
        <div class="card" style="width: 18rem;">
            <img src=${Gambar} class="card-img-top" alt=${Judul}>
            <div class="card-body">
                <h5 class="fs-6 ">${Judul}</h5>
            </div>
        </div>
    </a>
    `
    karya.appendChild(card)
}
karya.innerHTML += `<a href="https://bean791.github.io/Karya.html" class="text-text-decoration-none text-danger fs-6 text-center text-white hover:text-dua hover:scale-110 duration-700 my-5 text-empat">Lihat Semua</a>`