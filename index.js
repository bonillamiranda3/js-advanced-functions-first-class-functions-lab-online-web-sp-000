// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2)
}

const createFareMultiplier(multiplier) {
  return function fare(num) {
    return num*multiplier
  }
}

const selectingDrivers = [returnFirstTwoDrivers,
  returnLastTwoDrivers]
  function fareDoubler(fare) {
    return fare * 2
  }
  function return fareTripler(fare) {
    return fare * 3
  }
function fetchSpecifiedDrivers(driversArray, returnFunction) {
  returnFunction(driversArray)
}
