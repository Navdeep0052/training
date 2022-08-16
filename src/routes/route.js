const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;

// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
router.get('/sol1', function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let total = 0
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
  
    let n = arr[arr.length -1]
    //let  missingNumber = n * (n+1) / 2
    let result = n * (n + 1) / 2
    let missingNumber=result-total
    res.send({ data: missingNumber });
  });
    
    router.get('/sol2', function (req,res) {
        let arr = [33, 34, 35, 37, 38]
        let len = arr.length //5

        let total = 0;
        for (var i in arr) {
            total += arr[i]; // total=total+arr[i]
        }

        let firstDigit = arr[0] //33
        let lastDigit = arr.pop() //38
        
        let consecutiveSum = (len +1) * (firstDigit + lastDigit) / 2
        let missingNumber = consecutiveSum - total

        res.send({ data: missingNumber});
    })

  module.exports = router;
 