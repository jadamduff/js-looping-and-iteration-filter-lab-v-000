// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(driver) {return driver.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {return driver.slice(0, string.length - 1).toLowerCase() === string.toLowerCase()})
}
