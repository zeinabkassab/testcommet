

// const request = require ('request')


// const url = 'http://api.weatherstack.com/current?access_key=cfc021447134bcf9dc02160f26f33c0d&query=30.050,31.250'

// request ({url,json:true},(error,Response)=>{

//     console.log(Response.body.location.name)
// })


//  error


/*
request ({url,json:true},(error,Response)=>{

    if (error){
        console.log('error has eccured')


    }
    else if(Response.body.error){
        console.log(Response.body.error.type)
        console.log('unable to find location')
    }

    else {
        console.log( 'in' + Response.body.location.country + 'it is now ' + Response.body.current.temperature + 'degree')
    }

})*/



// ==========================================================


/*

const request = require ('request')


const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiemVpbmFia2Fzc2FiIiwiYSI6ImNrczdnN2F2djBscDMycHMwN2UzbXprYXcifQ.mzXte-En-2sizqPy-OBQvQ'


request ({url,json:true},(error,Response)=>{

    console.log(Response.body.features[1].center)
})




//  error



request ({url,json:true},(error,Response)=>{




    if (error){
        console.log('error has eccured')


    }
    else if (Response.body.message){
        console.log('Not Authorized - Invalid Token')


    }
    else if(Response.body.features.length==0){
        console.log('unable to find location')
    }

    else {
        console.log( Response.body.features[0].center)
    }

})





*/
















// =====================================================day 5===============================


/*

const request = require ('request')
const forecast = (latitude,longtidude,callback)=>{

 const url = 'http://api.weatherstack.com/current?access_key=cfc021447134bcf9dc02160f26f33c0d&query='+latitude+',' +longtidude 


//  error
request ({url,json:true},(error,Response)=>{

    if (error){
       callback('unabel to connect to weather stack services' , undefined)
       
    }

    else if(Response.body.error){
   
        callback('unable to find location' ,undefined)
    }

    else {
        callback( undefined , Response.body.current.weather_descriptions[0] + 'it is now ' + Response.body.current.temperature + 'degree')
    }

})





}



forecast(30.050,31.250, (error,data)=>{
    console.log('error' + error)
    console.log('data' + data)
})


*/




// ============================================================




/*


const request = require ('request')

const geocode = (address , callback)=>{


const geocodeurl = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoiemVpbmFia2Fzc2FiIiwiYSI6ImNrczdnN2F2djBscDMycHMwN2UzbXprYXcifQ.mzXte-En-2sizqPy-OBQvQ'

//  error
request ({url:geocodeurl,json:true},(error,Response)=>{
    
    if (error){
        callback('unable to connect mapbox service ' , undefined)
    }

    else if (Response.body.message){
      callback('Not Authorized - Invalid Token' ,undefined)

    }
    else if(Response.body.features.length==0){
        callback ('unable to find location',undefined )
    }

    else {
        callback(undefined,{
           latitude: Response.body.features[0].center[0],
           longtidude : Response.body.features[0].center[0]
        })
    }

})


}

*/
// فصلنا كل كود فى فايل لوحده وبنادى عليهم 




const  geocode = require ('./tools/geocode')
const forecast = require('./tools/forecast')


/*

/// static code 

geocode('egypt', (error,data)=>{
    console.log('error' , error)
    console.log('data' , data)
})



forecast(30.050,31.250, (error,data)=>{
    console.log('error' + error)
    console.log('data' + data)
})



*/



// we want to connect geocode with  forecast
//geocode بحيث انى اخد خط الطول ودايره العرض من 
//  عشان يدينى درجه حراره الدوله  forecast واحطه فى   ال 



const country = process.argv[2]

geocode(country, (error,data)=>{
    console.log('error' , error)
    console.log('data' , data)


    forecast(data.latitude , data.longtidude , (error,data)=>{
        console.log('error' , error)
        console.log('data' , data)
    })
    
})










