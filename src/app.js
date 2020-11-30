const path=require("path")
const express= require("express"); 
const hbs=require("hbs");
const request = require("request");
const app=express()/// create a new express entity app.get/app/set


//define paths for express config
const publicdirectorypath=path.join(__dirname,'../public')// ccs img//client javascript fe
const viewsPath= path.join(__dirname,"../templates/views")
const partialsPath= path.join(__dirname,"../templates/partials")

//set up HBS engine and views location
app.set("view engine", "hbs")///cmd- use hbs as the view engine
app.set("views",viewsPath) ////cmd- instead of default views directory use viewspath
hbs.registerPartials(partialsPath)

// setup static directorty to server
app.use(express.static(publicdirectorypath))

//all

app.get("", (req, res) =>{
 res.render("index"//name of the hbs file because we app.set hbs render sthe following OOJS to the html 
 , {
    title: "Weather app", 
    name:"Manoj Gurung"
 })
})


app.get("/about", (req, res) =>{
    res.render("about", {
        title: "About Me", 
        name:"Manoj Gurung"
    })
   })


app.get("/help", (req, res) =>{
    res.render("help", {
        title: " Help page", 
        HelpersName:"Manoj Gurung"
    })
   })

//-------------------------------------------
// get weather and api  code 
//-------------------------------------------
const geocodeFunction=require("./utils/geocode")
const weatherAPI=require("./utils/weatherAPI")

app.get("/weather"
,(request,response)=>{
    
        if(!request.query.address) {
        return response.send({
                error:" you must provide an adddress"
        })}
    

geocodeFunction(request.query.address, (error,{lat,long,location}={})=>{
     if(error){ return response.send({error})
      }
    
    // pasing hppt request fx from weather API with error data duo function here in geocode//take lat/long from geocode-don't have to have this keyowod
    weatherAPI(lat, long,(error,data)=>{
        if(error){
            return response.send({error})
           }
        

        response.send({
            forecast:data, 
            location,
            address:request.query.address
         })

         console.log(data)

         debugger

    })
    //call back data passing function ends that is passed the 

}) //app.get ends here

})
  

//404 not found

app.get("/help/*",(req, res) =>{
    res.send("go back to help page")
})

app.get("*",(req, res) =>{
    res.send("my 404 page")
})


// final listen command

app.listen(3000,()=>{
 console.log("server did start correctly in port 3000")    
})
