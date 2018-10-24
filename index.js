// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(driver) {return driver.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {return driver[drivers.length - 1].toLowerCase() === string.toLowerCase()})
}
