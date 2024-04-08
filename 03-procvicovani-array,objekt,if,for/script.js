let carsArray = []
let output = document.getElementById("carsOutput")

function addCar() {
    let car = {
        make: "",
        model: "",
    }

    car.make = document.getElementById("makeInput").value
    car.model = document.getElementById("modelInput").value

    carsArray.push(car)

    
    displayCars()
}

function displayCars() {
    console.log(carsArray);

    output.innerHTML = ""

    for(let i = 0; i < carsArray.length; i++ ) {
        output.innerHTML += "Make: " + carsArray[i].make + " Model: " + carsArray[i].model + `<br/>`
    }
}