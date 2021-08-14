


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




module.exports = forecast
