const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

// create API to give back calibration source data
// https://www.ezag.com/home/products/isotope_products/isotrak_calibration_sources/reference_sources/gamma_sources/point_sources/
let calibNuclide = {
    'am-241': {
        'nuclide': 'Americium 241',
        'energy': '60 keV',
        'halflife': '432.2 years',
        'transmission factor': 0.970
    },
    'cd-109':{
        'nuclide': 'Cadmium 109',
        'energy': '88 keV',
        'halflife': '1.3 years',
        'transmission factor': 0.981
    },
    'co-57':{
        'nuclide': 'Cobalt 57',
        'energy': '122 keV',
        'halflife': '271.74 days',
        'transmission factor': 0.982
    },
    'hg-203':{
        'nuclide': 'Mercury 203',
        'energy': '279 keV',
        'halflife': '46.61 days',
        'transmission factor': 0.986
    },
    'eu-152':{
        'nuclide': 'Europium 152',
        'energy': '344 keV',
        'halflife': '13.54 years',
        'transmission factor': 0.987
    },
    'cs-137':{
        'nuclide': 'Caesium 137',
        'energy': '662 keV',
        'halflife': '30 years',
        'transmission factor': 0.990
    },
    'mn-54':{
        'nuclide': 'Manganese 54',
        'energy': '834 keV',
        'halflife': '312.1 days',
        'transmission factor': 0.991
    },
    'co-60':{
        'nuclide': 'Cobalt 60',
        'energy': '1173 keV, 1332.5 keV',
        'halflife': '5.3 years',
        'transmission factor': 0.993
    },
    'y-88':{
        'nuclide': 'Yttrium 88',
        'energy': '1836 keV',
        'halflife': '106.6 days',
        'transmission factor': 0.994
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const nuclideName = request.params.name.toLowerCase()
    if(calibNuclide[nuclideName]){
        response.json(calibNuclide[nuclideName])
    }else{
        response.json(calibNuclide['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})