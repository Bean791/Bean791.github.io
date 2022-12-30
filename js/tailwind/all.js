const data = hasil()
const wadah = document.querySelector('#wadah')
data.forEach((item)=>{
    const {url,Judul, Gambar} =item
    const project = document.createElement('a')
    project.href = url
    project.innerHTML =
    `
    <img src=${Gambar} class="rounded-2xl hover:bg-empat hover:p-2 lg:mx-3 duration-700 scale-90 hover:scale-110" alt=${Judul} />
    `
    wadah.appendChild(project)
})
