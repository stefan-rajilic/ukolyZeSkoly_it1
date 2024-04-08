function helloWord() {
    const vysledek = 1 + 3 // const nelze měnit!

    let vysledek2 = 2 + 5 // je možné upravovat

    vysledek2 = vysledek2 + 1 // 7 + 1

    printNumber(vysledek, vysledek2) //názevFunkce(vstupní parametry)
}

function printNumber(vysledek, vysledeeeek) {
    console.log("Vysledek je: " + vysledek);
    console.log("2. Vysledek je: " + vysledeeeek);
}

function pozdravPrvaky() {
    console.log("Ahoj prváci!");

    alert("SDAIJSONS")
}

helloWord()
