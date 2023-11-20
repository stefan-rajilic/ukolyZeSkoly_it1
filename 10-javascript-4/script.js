const usersData = [] // Vytvoření globálního array
                     // není ve funkci proto, aby nebyl přepsán

// 1. vytvoříme array = [] (ALTGR + F)
// 2. Naplnit pole => usersData.push("TO CO CHCI PŘIDAT")
// 3. Vypsat to pole "dataOutput" = usersData

function calculatorBMI() {
    // Získat data z inputu (HTML)
    const weightInput = parseFloat(document.getElementById("weight").value)
    const heightInput = parseFloat(document.getElementById("height").value)

    // Výpočet BMI 
    // Vytvořím proměnou => uložím BMI (podle vzorce), ().toFixed(1) = 1 desetiné číslo
    const BMI = weightInput / ((heightInput * heightInput)).toFixed(1)

    // || = nebo/or
    if (weightInput <= 0 || heightInput <= 0) {
        document.getElementById("output").innerHTML = "Zadal jsi špatné číslo!"
    // Pokud je BMI menší než 18,5 tak se provede X
    } else if(BMI < 18.5){
        // X :
        document.getElementById("output").innerHTML = "Podváha"
        usersData.push("podváha") // Přidaní do pole usera s podváhou
    } else if(BMI >= 18.5 && BMI < 25) { 
        document.getElementById("output").innerHTML = "Normální váha"
        usersData.push("Normální váha")
    } else if(BMI >= 25 && BMI < 30) { 
        document.getElementById("output").innerHTML = "Nadváha"
        usersData.push("Nadváha")
    } else if(BMI >= 30) { 
        document.getElementById("output").innerHTML = "Obezita"
        usersData.push("Obezita")
    }

    document.getElementById("arrayOutput").innerHTML = usersData

}