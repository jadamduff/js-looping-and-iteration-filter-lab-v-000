// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) {driver.toLowerCase() === string.toLowerCase()})
}
