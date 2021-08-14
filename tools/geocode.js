

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

module.exports = geocode












