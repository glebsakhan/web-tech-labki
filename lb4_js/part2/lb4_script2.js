const dictionary = {
    "агр": "Від англ. aggro – агресивна поведінка NPC або іншого гравця, спрямована на вас. У грі часто означає, що вороги агресивно атакують гравця.",
    "баф": "Стан, що надає тимчасові бонуси або переваги персонажу (здоров’я, сила, швидкість). Зазвичай баф надається за допомогою певних заклинань чи предметів.",
    "нерф": "Зменшення ефективності чогось в грі, наприклад, ослаблення характеристик персонажа чи зброї.",
    "фраг": "Убивство іншого гравця, в основному використовується в контексті шутерів, як вбивство суперника.",
    "квест": "Завдання, яке гравець має виконати в межах гри для отримання винагороди або просування сюжету.",
    "грифер": "Гравець, який цілеспрямовано псує гру іншим, наприклад, руйнує будівлі, краде ресурси або атакує інших гравців без причини.",
    "пвп": "Гравець проти гравця. Бої або змагання між живими гравцями в реальному часі.",
    "пве": "Гравець проти оточення. Гравець бореться з NPC або іншими ігровими елементами, а не з іншими гравцями.",
    "лом": "Ігровий предмет, який дає можливість руйнувати певні об’єкти або створювати нові можливості для гравця.",
    "рейд": "Велика група гравців, які спільно атакують сильного ворога або групу ворогів для досягнення спільної мети."
};

const dictionaryForm = document.getElementById('dictionaryForm');
const wordInput = document.getElementById('word');
const wordDefinition = document.getElementById('wordDefinition');
const wordList = document.getElementById('wordList');

Object.keys(dictionary).forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    li.addEventListener('click', function() {
        wordInput.value = word;
        searchWord(word);
    });
    wordList.appendChild(li);
});

dictionaryForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const word = wordInput.value.trim().toLowerCase();

    if (word === "") {
        wordDefinition.innerHTML = "<p>Будь ласка, введіть термін для пошуку.</p>";
    } else if (dictionary[word]) {
        wordDefinition.innerHTML = `<p><strong>${word}:</strong> ${dictionary[word]}</p>`;
    } else {
        wordDefinition.innerHTML = "<p>Термін не знайдений в словнику.</p>";
    }

    wordInput.value = "";
});

function searchWord(word) {
    if (dictionary[word]) {
        wordDefinition.innerHTML = `<p><strong>${word}:</strong> ${dictionary[word]}</p>`;
    } else {
        wordDefinition.innerHTML = "<p>Термін не знайдений в словнику.</p>";
    }
}