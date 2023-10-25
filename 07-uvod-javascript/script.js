function myFunction() {

    var variable1; // NEbudeme používat!
    let variable2; // LET - budeme používat!
    const variable3 = 3; //nemohu poté změnit
    variable4 = "Ahoj" // STRING
    variable5 = 5 // NUMBER / INT / INTEGER
    variable6 = true // BOOLEAN

    const userFirstName = document.getElementById("firstName").value // Získám jméno z HTML
    const userLastName = document.getElementById("lastName").value // Získám příjmení z HTML
 
    const userFullName = userFirstName + " " + userLastName // Vytvořim proměnou a uložím jméno + příjmení

    document.getElementById("fullName").value = userFullName // DO HTML(inputu) vložím userFullName
}

// -----------------------KALKULAČKA----------------------- //

function addition() { // Funkce pro sčítání
    //parseInt = převede String na INT a tím pádem zle poté provádět matematické operace
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const addtionResult = inputFirstNumber + inputSecondNumber

    document.getElementById("result").value = addtionResult
}

function subtraction() { // Funkce pro odčítání
    const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
    const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

    const addtionResult = inputFirstNumber - inputSecondNumber

    document.getElementById("result").value = addtionResult

}