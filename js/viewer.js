const params = new URLSearchParams(window.location.search);
const book = params.get("book");

if (book) {
    document.getElementById("pdfViewer").src =
        "books/" + book + "#toolbar=0";
} else {
    alert("No book selected.");
}