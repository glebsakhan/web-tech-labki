document.getElementById("languages-link").addEventListener("click", function(e) {
    e.preventDefault(); 
    loadData("1.txt");
});

document.getElementById("students-link").addEventListener("click", function(e) {
    e.preventDefault(); 
    loadData("2.txt");
});

function loadData(filename) {
    
    fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json(); 
        })
        .then(data => {
            const contentDiv = document.getElementById("content");
            contentDiv.innerHTML = JSON.stringify(data, null, 2); 
        })
        .catch(error => {
            console.error('Error', error);
        });
}
