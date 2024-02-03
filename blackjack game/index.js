//dealing with array
// let featuredPosts = [
//     "Check Netflix Clone",
//     "Here is the code for the project",
//     "I relaunched my portfolio"
// ]
// console.log(featuredPosts[1])
// //adding content to the array using push
// featuredPosts.push(5)

// let newMessage = "Ali Mzungu"
// featuredPosts.push(newMessage)
// console.log(featuredPosts)

// let experience = [
//     "CEO at Aptek Computers", 
//     "front end developer at TechbySj Organisation",
//     "okay you"
// ]

//loops
//Counting in JS from 10 to 2-
// for (let count = 10; count < 21; count += 1){
//     console.log(count)
// }

// for this example I omitted the let var declaration
// for ( count = 10; count<101; count +=10){
//     console.log(count)
// }

//printing the whole array using for loop
// let featuredPosts = [
//         "Check Netflix Clone",
//          "Here is the code for the project",
//          "I relaunched my portfolio"
//      ]


// for (let i = 0; i <= featuredPosts.length; i +=1){
//     console.log(featuredPosts[i])
// }

// // Sample array
// let myArray = [1, 2, 3, 4, 5];

// // Using a for loop to print each element
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }


// let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i <= sentence.length; i++){
//     greetingEl.textContent = sentence[i] + " "
// }

// let player1Time = 102
// let player2Time = 107

// function getFastraceTime(){
//     if (player1Time < player2Time){
//         return player1Time
//     } else if (player2Time < player1Time){
//         return player2Time
//     }else{
//         return player1Time
//     }
// }
// let fastestrace = getFastraceTime()
//  console.log(fastestrace)

//Math.random() used to create random numbers from 0 to upto but not including 1
// let randomNumber = Math.random()*9

// console.log(randomNumber)

// floorednumber returns a negative number by rounding it off
// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)

//Combining math random and mathfloored
// let randomNumber = Math.floor(Math.random()*7)
// console.log(randomNumber)

//using a function
// function rollDice(){
//     let randomNumber = Math.floor(Math.random()*7)
//     console.log(randomNumber)
// }
// rollDice()

//alternatively
// function rollDice(){
//     let randomNumber = Math.floor(Math.random()*6)+1
//     return randomNumber
// }
// console.log(rollDice())

//nested if statements
//  let giveCert=true
//  let hascompletedCourse = true

//  if(hascompletedCourse === true && giveCert = true){
//     generateCert()
//  }
//  function generateCert(){
//     console.log("Give Certificate..")
//  }

//alternatively
// let giveCert=true
// let hascompletedCourse = true

// if(hascompletedCourse === true){
//     if(giveCert === true){
//         generateCert()
//     }
// }
// function generateCert(){
//        console.log("Give Certificate..")
// }

// let hasSolved = false
// let usingHishint = false

// if( hasSolved===false && usingHishint===false){
//     showSolution()
// }

// function showSolution(){
//     console.log("Provide The Solution")
// }

// let likesDocs = true
// let likesStartups = false

// if (likesDocs === true && likesStartups=== true)

//craeting objects
// let player = {
//     playerName: "Ali",
//     playerChips: 180
// }

// //practical 2
// let course = {
//     heading: "Graphic Dsign",
//     lessons: 8,
//     creator: "Ali Mzungu",
//     duration: 55,
//     level: 1, 
//     free:true
// }
// console.log(course.heading)

//practicing objects and functions
// let person = {
//     name: "Ali",
//     age: 26,
//     country: "kenya"
// }

// function logData(){
//     console.log(person.name + " is " + person.age + " Years old and lives in " + person.country)
// }
// logData()

//practicing conditional statemnets
//  let age = 20

//  if(age<=6){
//     console.log("it is free")
//  }else if(age <= 17) {
//     console.log("get child discount")
//  } else if(age<=26){
//     console.log("student discount")
//  }else if(age<=66){
//     console.log("full price")
//  }else if(age>66){
//     console.log("gat senior discount")
//  }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// for( i = 1; i<largeCountries.length; i++){
//     console.log("- " + largeCountries[i])
// }

// let largeCountries = ["Kenya", "India", "USA", "Indonesia", "Nigeria"]
// largeCountries.pop()
// largeCountries.push("Pakistan") 
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// let dayMonth = 13
// let weekDay = "Friday"
// if(dayMonth===13 && weekDay==="Friday"){
//     console.log("Hurray")
// }

//rockpaperscissorsgame
let hands = ["rock", "paper", "scissor"]

function getHand(){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex]
}
console.log(getHand())
