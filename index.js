// Code your solution here
//const findMatching = (drivers, name) => {
    // Go through the array and filter out all drivers names that match
    // create an empty array
    // loop through all drivers
    //      if driver has the same name as the name 
    //      thats passed down
    //      add it to empty array
    //return array
//     let newArray = []
//     for(let driver of drivers){
//         if(driver === name) {
//         newArray.push(driver)
//         }
//     }
//     return newArray
// }

// const findMatching = (drivers, name) => {
//     let newArray = []
//     for(let driver of drivers){
//         if(driver === name) {
//         newArray.push(driver)
//         }
//     }
//     return newArray
// }
// findMatching(drivers, "Bobby")

const findMatching = (drivers, string) => {
    //input= array of drivers, string
    //action= filter() method (checks all drivers' names' and finds the ones 
    //    matches with the given string and it should be case insensitive )
    //output= array of string/s has the matching namaes, case insensitive
    return drivers.filter(driver => driver === string || driver.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
    //input= array of drivers, string
    //action= filter() method (checks all drivers' names, compares with the provided beginning letters, returns the ones that matches )
    //output= array of string/s begin with the provided letters
    return drivers.filter(driver => driver.substr(0,2) === string.substr(0,2))
}


const matchName = (drivers, string) => {
    //input= array of objects, string
    //action= filter() method (checks all drivers' names to find a matching name )
    //output= array of object with the matchin driver name and the hometown key attribute with the assigned value
    return drivers.filter(driver => driver.name === string)
}

