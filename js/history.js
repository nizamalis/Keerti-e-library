const history = JSON.parse(localStorage.getItem("readingHistory")) || [];
const table = document.getElementById("historyTable");

table.innerHTML = "";

history.forEach(item => {
    table.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.time}</td>
            <td>
                <a href="viewer.html?book=${item.file}"
                   class="btn btn-primary btn-sm">
                   Read Again
                </a>
            </td>
        </tr>
    `;
});

// Clear History Button
function clearHistory() {
    localStorage.removeItem("readingHistory");
    location.reload();
}


