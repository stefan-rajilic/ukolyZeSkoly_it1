// Část 1.: 

function calculateC() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    
    let c = Math.sqrt(a*a + b*b); // a*a = a**2
    document.getElementById('c').value = c.toFixed(1);
}

// Část 2.:

function calculateMissingValue() {
    // get element
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    
    if (!isNaN(a) && !isNaN(b)) { // && = AND
        c = Math.sqrt(a**2 + b**2).toFixed(1);
        document.getElementById('c').value = c;
    } else if (!isNaN(a) && !isNaN(c)) {
        b = Math.sqrt(c**2 - a**2).toFixed(1);
        document.getElementById('b').value = b;
    } else if (!isNaN(b) && !isNaN(c)) {
        a = Math.sqrt(c**2 - b**2).toFixed(1);
        document.getElementById('a').value = a;
    } else {
         alert("Nesprávně zadané!");
    }
}

// ----------------- Vysvětlení ---------------------------

function nameOfFunction() { // vytvoření funkce

    // Vytvoření variables (promněných)
    
    let variableLet = 12 // dá se přepsat
    let result

    // getElementById 

    const variable1 = parseInt(document.getElementById("1").value) // nedá se přepisovat!!!!!
    const variable2 = parseInt(document.getElementById("2").value)
    const variable3 = parseInt(document.getElementById("3").value)

    result = variable1 + variable2 + variable3

    result = result + variable1
    
    console.log(result)


}

// Vysvětlení if
function ifExplained() {
    if(true){ // Podmínka "true" vždy projde a kód se vykoná, false zase naopak
        console.log("AHOJ! 1") // Vypíše se
    }

    if(false){
        console.log("AHOJ! 2")  // Nevypíše se
    } else if(true){
        console.log("AHOJ! 3")  // Vypíše se
    }

    if(false){
        console.log("AHOJ! 4") // Nevypíše se
    } else if(false){
        console.log("AHOJ! 5") // Nevypíše se
    } else {
        console.log("AHOJ! 6")  // Vypíše se
    }

    if(false){
        console.log("AHOJ! 4") // Nevypíše se
    } else if(true){
        console.log("AHOJ! 5") // Vypíše se
        // BREAK - zde se if ukončí a nic pod ním se již nevypíše
    } else if(true) {
        console.log("AHOJ! 6") // Nevypíše se
    }


}

// spuštění funkce bez volání v HTML
// funkce se spustí hned při spuštění stránky
ifExplained()

