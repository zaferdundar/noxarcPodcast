const searchBtn = document.querySelector(".fa-magnifying-glass")
const searchInput = document.querySelector(".searchInput")
const date = document.querySelector(".date")

async function pcastSearchApi (term) {
    const searchApi = ("https://nox-podcast-api.vercel.app/search?text="+term)
    const bearer = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE2NTcxNTE1MzF9.-TnFVGTs6xFv61UTb-fUfaA8toNDqXqTziIiMBvfPSk"

    return await fetch(searchApi, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": bearer
        }
    })
        .then((response) => response.json())
        .then((data) => {

            return data

        })
}

const mydate = new Date()

searchBtn.addEventListener("click", async () => {
    const search = searchInput.value
    const datam = await pcastSearchApi(search)
    let content = ""

    datam.forEach(result => {
        content +=`
        <li style="background: url(BG.png) no-repeat" >
                    <h1 title="${result.title}">${result.title}</h1>
                    <div class="bottomHolder">
                        <span class="date">
                        ${mydate.getDate()}.${mydate.getMonth()}.${mydate.getFullYear()} 
                        <i class="fa-solid fa-clock"></i> 
                        ${mydate.getHours()}:${mydate.getMinutes()}:${mydate.getSeconds()} 
                        </span>
                        <span class="user">
                            <img src="03w.png">
                            ${result.author}
                        </span>
                    </div>
                    <a href="podcast.html?data=${encodeURI(JSON.stringify(result))}">
                        <i class="fa-solid fa-play"></i>
                    </a>
                </li>
        `
        document.getElementById("searchResult").innerHTML = content
        document.getElementById("resultLength").innerHTML = `Podcast (${datam.length})`


    })
})



