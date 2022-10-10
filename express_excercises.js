const express = require('express')
const app = express()

//Start our app and listen specifically on port 3005
app.listen(3005, function() {
    console.log('Server is running on port 3005')
})

// We can tell express to use middleware called "express.json()"
// This line will allow our req.body to work and show our input from Postman
app.use(express.json());

app.get('/', function(req,res) {
    //How do we return the home page?
})

// Make a GET request that returns json with John Doe's name 
app.get('/name', function (req, res, next) {
    console.log('GET method being hit!!!!')
    res.json({
        "firstname": "John",
        "lastname": "Doe"
    })
})

// Make a POST request that takes in a POST body (input) -> transforms the input
// and returns the provided firstname & lastname combined together
app.post('/name', function (req, res, next) {
    console.log("POST method being hit")
    console.log(req.body)

    // Alternate ways to get our data
    // console.log(req.body.firstname)
    // console.log(req.body['firstname'])

    const firstName = req.body.firstname
    const lastName = req.body.lastname

    //Return our data in a combined manner
    res.json({
        fullname: `${firstName}, ${lastName}`
    })
})

// Route Parameter example
// We want to be able to have the year being passed as a 'variable' of sorts (AKA a parameter)
// That way, we can use it in our code!!!
app.get('/digital-crafts/cohort/:year', function (req, res, next) {
    console.log('DIGITALCRAFT ENDPOINT IS BEING HIT!!!')
    let year = req.params.year
    console.log(year)

    res.send(`I study at DigitalCrafts ${year} cohort`)
    console.log('DIGITAL CRAFTS IS BEING HIT')
    let year2 = req.params.year


    res.send('I study at digital crafts')
})