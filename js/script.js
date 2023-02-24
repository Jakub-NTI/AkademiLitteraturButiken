//Searchbar
const searchInput = document.querySelector("[data-search]")

let books = [
    document.getElementById("book1").innerHTML, 
    document.getElementById("book2").innerHTML,
    document.getElementById("book3").innerHTML,
    document.getElementById("book4").innerHTML,
    document.getElementById("book5").innerHTML,
    document.getElementById("book6").innerHTML,
    document.getElementById("book7").innerHTML,
    document.getElementById("book8").innerHTML,
    document.getElementById("book9").innerHTML,
    document.getElementById("book10").innerHTML,
    document.getElementById("book11").innerHTML,
    document.getElementById("book12").innerHTML
]

searchInput.addEventListener("input", (e) => {
    const value = e.target.value
    books.forEach(element => {
        const isVisible = element.includes(value)
        element.classList.toggle("hide", !isVisible)
    })
})
 //Ska få böcker som inte innehåller input att få "hide"-klassen
 //Men jag vet inte hur Java Script fungerar