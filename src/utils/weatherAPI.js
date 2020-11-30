const request = require("request");

const weatherAPI=(lat,long,callbackFunction)=>{
 
    const url='http://api.weatherstack.com//current?access_key=697ab59c5918d4581debf7c3be61f85f&query='
    +long+
    ',' 
    +lat+
    '&units=f'
    request(
        {url, json:true}, (error, {body})=>{
            {
               if(error){
                   callbackFunction("unable to connect to weather services")
               } else if(body.error){
                   callbackFunction("uanble to find location")
               }else{ 
                callbackFunction(undefined, "The weather in "+ body.location.name+" ," +body.location.country+"is decribed as  "+body.current.weather_descriptions[0]+ " and the actual fucking temperature is "+ body.current.temperature+"in Fahreheits")
        
               }    

          }


        })
    
    }


    module.exports =weatherAPI;