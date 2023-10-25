// kalkuklačka
// inputy x2 
// 4 tlačítka: +,-,*,/
// vypsat výsledek (ne consol.log!)


function calculate(operator) {
    const firstNumber = parseFloat(document.getElementById("firstNum").value);
    const secondNumber = parseFloat(document.getElementById("secondNum").value);
    let result;

    switch(operator)  { // +,-,/,*
        case '+':
            result = firstNumber + secondNumber;
            break; // tady se proces ukončí pokud je operator +
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if(secondNumber !== 0) { // ! = ne 
                result = firstNumber / secondNumber;
            } else {
                result = 'Nelze dělit nulou';
            }
            break;
    }
    document.getElementById("result").innerHTML = result;
}

// ----------------------------------------------------------------

function checkResult() {

    const inputNumber = parseInt(document.getElementById("numberToCheck").value)

    if(inputNumber < 10) { // pokud pravda tak se provede kód: x
        console.log("MENŠÍ NEŽ 10") // kód: x
    } else if(inputNumber > 10) { // pokud pravda tak se provede kód: y
        console.log("VĚTŠÍ NEŽ 10") // kód: y
    } else if(inputNumber == 10) {
        console.log("JE ROVNO 10")
    } else { // pokud nic z předchozího není pravda tak se provede tento kód (bez podmínky!)
        console.log("NENÍ ČÍSLO!")
    }

}

// ARRAY + FOR LOOP

// ARRAY
const cars = ["Audi", "Bmw", "Mercedes"] // ARRAY strings
const numbers = [1, 3, 5] // ARRAY numbers
const carsInGarage = ["audi", 1, "bmw", 2, "merc", true]
const booleanArray = [true, false, false] // ARRAY booleans


const cars2 = []; // Vytvoření prázdného pole
cars2[0]= "Saab"; // Vložení stringu "Saab" do pole "cars2" na pozici "0"
cars2[1]= "Volvo";
cars2[2]= "BMW";
cars2[3]= true; // Vložení booleanu "true" do pole "cars2" na pozici "3"

function forLoop() {
    for(let i = 0; i < cars2.length; i++) { // 1. vytvoření promněné; 2. podmínka; 3. i++ = po káždém provedení => i = i + 1
        console.log(cars2[i]) // i = 0 cars2[0] => "Saab" => do console se vypíše: Saab
    }
}

// Úkol - arry
// Vytvořit array třídy 
// 10 žáků 
// Vypsat pomocí foru do console

const classIT1 = [
    "Gurbi Roflman",    // 0
    "Marek Proche",     // 1
    "Filip Kaše",       // 2
    "Oliver Cavallo",   
    "Nazar Vintoniv",
    "Robin Cavallo",
    "Boris Boček",
    "Kryštof Maindl",
    "Šimon Fritsch",
    "Marco Maťko",
]


function classFor() {
    for(let i = 0; i < classIT1.length; i++) { 
        console.log(classIT1[i]) 
    }
}


// Příklad pole objektů
// Je to sada informací (dat)


const classIT1Obj = [
    {   // 1 objekt = jméno, věk, telefoní číslo
        name: "Gurbi Roflman",
        age: 20,
        phoneNumber: "123-456-789"
    },
    {
        name: "Marek Proche",
        age: 22,
        phoneNumber: "123-456-789"
    },
    {
        name: "Filip Kaše",
        age: 21,
        phoneNumber: "123-456-789"
    },
    {
        name: "Oliver Cavallo",
        age: 20,
        phoneNumber: "123-456-789"
    },
    {
        name: "Nazar Vintoniv",
        age: 23,
        phoneNumber: "123-456-789"
    },
    {
        name: "Robin Cavallo",
        age: 21,
        phoneNumber: "123-456-789"
    },
    {
        name: "Boris Boček",
        age: 22,
        phoneNumber: "123-456-789"
    },
    {
        name: "Kryštof Maindl",
        age: 20,
        phoneNumber: "123-456-789"
    },
    {
        name: "Šimon Fritsch",
        age: 22,
        phoneNumber: "123-456-789"
    },
    {
        name: "Marco Maťko",
        age: 21,
        phoneNumber: "123-456-789"
    }
];

// Jak vypsat z pole objektů určitou informaci
console.log(classIT1Obj[0].name); // Vypíše "Gurbi Roflman"



// Ukázka převedení inputu na HASH 
// Používá se v kryptografii, uložení hesel v databázi
// Ahoj bude vždy mít stejný hash a proto se může ukládat heslo v hash.

async function hashInput(input) {
    // Převedení vstupního řetězce na ArrayBuffer
    // ArrayBuffer = uchování a manipulace s pevnou délkou binárních dat
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    
    // Hashování dat
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    
    // Převedení výsledného hash bufferu na hexadecimální řetězec
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    
    return hashHex;
}

// Příklad použití
hashInput('Ahoj!').then(hash => {
    console.log(hash); // Vypíše hash v hexadecimálním formátu
    // Příklasd hash (Ahoj!): 9fd72bfa43a9ec5cf1290aa651abf6b04c09b71303873a11b022c9f2ec9ed3c6
});





