const request = require("request");

const geocodeFunction=(address,callbackFunction)=>{
 
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"
    +address+
    ".json?access_token=pk.eyJ1IjoiaW1lZGJvb2siLCJhIjoiY2toemlxMjZlMDJsazJ3cWc1bWo1MnhzeiJ9.DHwxAxuync_3mc54hHKTeg&limit=1"
    //above url is defined
    
    //request is iniated using (url, then json is made true,(error,)
    request({url, json:true}, (error, {body})=>{

               if(error){
                   callbackFunction("unable to connect to location services")
               } else if(body.features.length===0){
                   conso
                   callbackFunction("type in correct location")
               }else{ 
                callbackFunction(undefined,{
                    lat: body.features[0].center[0],
                 long: body.features[0].center[1],
                  location: body.features[0].place_name
                })
               }    

          })

        }


    module.exports =geocodeFunction