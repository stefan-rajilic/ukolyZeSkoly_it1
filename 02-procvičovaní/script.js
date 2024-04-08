let animalWeights = []

function addWeight() {
    
    const animalWeightInput = parseInt(document.getElementById("inputWeight").value)

    animalWeights.push(animalWeightInput)

    document.getElementById("currentAnimalWeight").innerHTML = "Animal weight: " + animalWeightInput + "kg"

    let animalWeightsSum = 0
    let heaviestAnimalF = 0

    for(let i = 0; i < animalWeights.length; i++) {
        animalWeightsSum += animalWeights[i]
        if(animalWeights[i] > heaviestAnimalF) {
            heaviestAnimalF = animalWeights[i]
        }
    }

    document.getElementById("animalWeightsSum").innerHTML = "Sum of animals weights: " + animalWeightsSum + "kg"

    let heaviestAnimalMM = Math.max(...animalWeights)

    document.getElementById("heaviestAnimal").innerHTML = "Heaviest animal: " + heaviestAnimalMM + "kg"

}

// Přidání objektu do array

let animals = [] // vytvoří pole (eng: array)

function addAnimal() {

    const animal = { // Objekt
        name: "",
        weight: 0,
        species: "",
    }

    animal.name = document.getElementById("animalName").value
    animal.weight = document.getElementById("animalWeight").value
    animal.species = document.getElementById("animalSpecies").value

    animals.push(animal)

    document.getElementById("arrayObejctOutput").innerHTML = animal.name + animal.weight + animal.species
}

