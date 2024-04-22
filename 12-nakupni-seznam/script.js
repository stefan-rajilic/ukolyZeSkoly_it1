// function check() {
//     let items = getItems(); // Načte položky ze storage
//     items.forEach((item, index) => {
//         ifinput = item    
//             console.log();
//             return
//     }   else addItem()
// } Takto by se dalo ověřit jestli není položka již v seznamu

// Přidává posluchač události, který se spustí, jakmile je dokument plně načten. 
// To zajistí, že všechny HTML prvky jsou dostupné pro manipulaci pomocí JavaScriptu.
document.addEventListener('DOMContentLoaded', function() {
    displayItems(); // Zavolá funkci displayItems, která zobrazí položky uložené v LocalStorage.
});

// Funkce pro přidání nové položky do seznamu
function addItem() {
    let itemInput = document.getElementById('itemInput'); // Získá textové pole pro vstup od uživatele
    let itemValue = itemInput.value.trim(); // Ořeže bílé znaky z obou konců řetězce

    // Kontroluje, zda je vstupní pole prázdné
    if (!itemValue) {
        alert("Prosím, zadejte název položky."); // Zobrazí upozornění, pokud je pole prázdné
        return; // Ukončí funkci, aby se nedošlo k dalšímu zpracování
    }

    let items = getItems(); // Načte položky ze storage
    items.push({ name: itemValue, completed: false }); // Přidá novou položku do pole položek
    localStorage.setItem('shoppingItems', JSON.stringify(items)); // Uloží upravené pole zpět do LocalStorage
    itemInput.value = ""; // Vyčistí textové pole
    displayItems(); // Aktualizuje zobrazení seznamu
}

// Funkce pro zobrazení položek v seznamu
function displayItems() {
    let items = getItems(); // Načte položky ze storage
    let shoppingLists = document.getElementById('shoppingLists'); // Získá element pro zobrazení seznamů
    shoppingLists.innerHTML = ''; // Vyčistí obsah elementu

    // Projde všechny položky a pro každou vytvoří HTML elementy
    items.forEach((item, index) => {
        let itemElement = document.createElement('div');
        itemElement.className = 'form-check';
        itemElement.innerHTML = `
            <input class="form-check-input" type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleItem(${index})">
            <label class="form-check-label ${item.completed ? 'completed' : ''}">
                ${item.name}
            </label>
            <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">Smazat</button>
        `;
        shoppingLists.appendChild(itemElement); // Přidá element do DOM
    });
}

// Funkce pro označení položky jako dokončené nebo nedokončené
function toggleItem(index) {
    let items = getItems(); // Načte aktuální stav položek
    items[index].completed = !items[index].completed; // Přepne stav položky
    localStorage.setItem('shoppingItems', JSON.stringify(items)); // Uloží nový stav do LocalStorage
    displayItems(); // Aktualizuje zobrazení seznamu
}

// Funkce pro smazání položky ze seznamu
function deleteItem(index) {
    let items = getItems(); // Načte aktuální stav položek
    items.splice(index, 1); // Odstraní položku z pole
    localStorage.setItem('shoppingItems', JSON.stringify(items)); // Uloží nový stav do LocalStorage
    displayItems(); // Aktualizuje zobrazení seznamu
}

// Funkce pro načtení položek z LocalStorage
function getItems() {
    let storedItems = localStorage.getItem('shoppingItems'); // Načte položky jako řetězec
    if (storedItems) {
        return JSON.parse(storedItems); // Převede řetězec zpět na JavaScriptový objekt
    }
    return []; // Pokud v LocalStorage nic není, vrátí prázdné pole
}