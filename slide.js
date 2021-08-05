var carousel = document.getElementById("images");
async function getApi() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    var data1 = await res.json();
    show(data1)
}
var slideCount = 1;
function show(data) {
    let articles = data.results;
    let card = "";
    var index = 0;
    articles.forEach(function (elements) {
        if (index == 0 || index % 3 == 0) {
            card += `<div class = "slide" id=slide-${slideCount}>`
        }
        card += `
        <div class="card">
            <img class="card-image" src= ${elements["image"]} alt="Card image cap">
                <div class="card-body">
                    <p class="card-title">Name: ${ elements["name"]}</p>
                    <p class="card-text">
                    Species: ${ elements["species"] } 
                    <br>
                    Status: ${ elements["status"] } 
                    </p>

                </div>
        </div>`
        if ((index + 1) % 3 == 0 && index != 0) {
            card += `</div>`
            slideCount++;
        }
        index++;
    });
    carousel.innerHTML += card;
    document.getElementById("slide-1").classList.add("active")
}
function myFunc(){
    getApi();
}
var idx = 1;

document.getElementById("next").addEventListener("click", function () {
    idx++
    if (idx > slideCount) {
        document.getElementById(`slide-${idx-1}`).classList.remove("active")
        idx = 1
    }
    document.getElementById(`slide-${idx}`).classList.add("active")
    if(idx!=1){
        document.getElementById(`slide-${idx-1}`).classList.remove("active")

}

})
document.getElementById("prev").addEventListener("click", function () {
    idx--;

    if (idx <= 0) {
        document.getElementById(`slide-${1}`).classList.remove("active")
        idx = slideCount
    }
    document.getElementById(`slide-${idx}`).classList.add("active")
    if(idx<7)
    document.getElementById(`slide-${idx+1}`).classList.remove("active")

})