document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const calibNuclide = document.querySelector('input').value
    try{
        const response = await fetch(`https://calib-nuclide-info.herokuapp.com/api/${calibNuclide}`)
        const data = await response.json()

        console.log(data)
        document.querySelector(.nuclide).innerText = data.nuclide
        document.querySelector(.energy).innerText = data.energy
        document.querySelector(.halflife).innerText = data.halflife
    }catch(error){
        console.log(error)
    }
}

// need to correct the event listener