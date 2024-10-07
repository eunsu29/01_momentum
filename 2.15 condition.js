const age = parseInt(prompt("age?"));

if(isNaN(age) || age < 0) {
    console.log("write positive number")
} else if(age >= 20) {
    console.log("drink")
} else {
    console.log("don't drink")
}