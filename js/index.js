document.getElementById("logout").addEventListener("click", function(e){

    e.preventDefault();

    if(confirm("Are you sure you want to Sign Out?")){
        window.location.href = "Login/login.html";
    }

});

// Search Books

const search = document.getElementById("searchBook");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    let books = document.querySelectorAll(".book-card");

    books.forEach(function(book){

        let title = book.querySelector("h5").innerText.toLowerCase();

        if(title.includes(value)){
            book.style.display = "flex";
        }else{
            book.style.display = "none";
        }

    });

});
// Function to open a book in the PDF viewer
function openBook(btn) {

    const book = btn.dataset.book;
    const title = btn.dataset.title;

    document.getElementById("bookTitle").innerText = title;
    document.getElementById("pdfViewer").src =
        "books/" + book + "#toolbar=0";

    const modal = new bootstrap.Modal(document.getElementById("pdfModal"));
    modal.show();

    let history = JSON.parse(localStorage.getItem("readingHistory")) || [];

    history.unshift({
        name: title,
        file: book,
        time: new Date().toLocaleString()
    });

    localStorage.setItem("readingHistory", JSON.stringify(history));
}


// Clear the PDF viewer when the modal is closed
document.getElementById("pdfModal").addEventListener("hidden.bs.modal", function(){

    document.getElementById("pdfViewer").src = "";

});
