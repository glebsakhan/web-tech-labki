const form = document.getElementById('pizzaForm');
const tableBody = document.getElementById('orderTable').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const topping = document.querySelector('input[name="topping"]:checked')?.value;
    const sauce = document.getElementById('sauce').value;
    const extraCheese = document.getElementById('extra-cheese').checked ? 'Extra Cheese' : '';
    const glutenFree = document.getElementById('gluten-free').checked ? 'Gluten Free Base' : '';
    const instructions = document.getElementById('instructions').value;

    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${topping}</td>
        <td>${sauce}</td>
        <td>${extraCheese} ${glutenFree}</td>
        <td>${instructions}</td>
    `;

    form.reset();
});