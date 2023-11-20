const items = []; // Pole pro ukládání položek
let isEditing = false; // Proměnná pro sledování stavu úpravy

function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemList = document.getElementById("itemList");

    const newItemText = itemInput.value.trim();


    // newItemText = Rohlik

    if (newItemText !== "") {
        // Pokud položka ještě neexistuje, přidat ji
        if (!items.some(item => item.text === newItemText)) {
            const newItem = {
                text: newItemText,
                count: 1
            };
            items.push(newItem);

            // Vytvořit nový prvek seznamu
            const listItem = document.createElement("li");
            listItem.className = "list-group-item d-flex justify-content-between align-items-center";

            // Přidat tlačítko pro smazání
            
            const deleteButton = document.createElement("button");//<button></button>
            deleteButton.className = "btn btn-danger";//<button class="btn btn-danger"></button>
            deleteButton.innerText = "Smazat";//<button class="btn btn-danger">Smazat</button>
            deleteButton.onclick = function () { //<button click="deleteItem(listItem, newItem)" class="btn btn-danger"></button>
                deleteItem(listItem, newItem);
            };

            // Přidat tlačítko pro označení jako hotové
            const doneButton = document.createElement("button"); //<button></button>
            doneButton.className = "btn btn-success"; //<button class=""btn btn-success""></button>
            doneButton.innerText = "Hotovo"; //<button class=""btn btn-success"">Hotovo</button>
            doneButton.onclick = function () {//<button click="markDone(listItem)" class=""btn btn-success"">Hotovo</button>
                markDone(listItem);
            };

            // Nastavit text položky a počet
            listItem.innerHTML = `<span>${newItem.text} (Počet: ${newItem.count})</span>`;
            

            // Přidat tlačítka k položce
            listItem.appendChild(doneButton);
            listItem.appendChild(deleteButton);

            // Přidat položku do seznamu
            itemList.appendChild(listItem);

            // Vyčistit pole pro vstup
            itemInput.value = "";
        } else {
            // Pokud položka již existuje, zvýšit počet
            const existingItem = items.find(item => item.text === newItemText);
            existingItem.count++;
            // Aktualizovat zobrazení počtu
            updateItemCount(existingItem);
        }
    } else alert("PRÁZDNÝ!")
}

function updateItemCount(item) {
    const itemList = document.getElementById("itemList");
    const itemsElements = itemList.getElementsByTagName("li");
    for (let i = 0; i < itemsElements.length; i++) {
        const listItem = itemsElements[i];
        if (listItem.textContent.includes(item.text)) {
            listItem.innerHTML = `<span>${item.text} (Počet: ${item.count})</span>`;
        }
    }
}

function toggleEdit() {
    const editButton = document.getElementById("editButton");

    // Pokud se jedná o úpravu, přepnout na "Skončit úpravu"
    if (isEditing) {
        isEditing = false;
        editButton.innerText = "Upravit položky";

        // Zakázat editaci textu položek
        const itemList = document.getElementById("itemList");
        const items = itemList.getElementsByTagName("li");
        for (let i = 0; i < items.length; i++) {
            const listItem = items[i];
            listItem.contentEditable = false;
            listItem.style.border = "none";
        }
    } else {
        // Pokud ne, přepnout na úpravu
        isEditing = true;
        editButton.innerText = "Skončit úpravu";

        // Umožnit editaci textu položek
        const itemList = document.getElementById("itemList");
        const items = itemList.getElementsByTagName("li");
        for (let i = 0; i < items.length; i++) {
            const listItem = items[i];
            listItem.contentEditable = true;
            listItem.style.border = "1px solid #ccc";
        }
    }
}

function deleteItem(item, itemObject) {
    const itemList = document.getElementById("itemList");

    // Odstranit konkrétní položku ze seznamu
    const index = items.indexOf(itemObject);
    if (index !== -1) {
        items.splice(index, 1);
    }

    itemList.removeChild(item);
}

function markDone(item) {
    // Změnit pozadí položky na zelenou
    item.style.backgroundColor = "green";
}

function deleteItems() {
    const itemList = document.getElementById("itemList");

    // Odstranit všechny položky ze seznamu
    itemList.innerHTML = "";
    items.length = 0;
}