function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);//8
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(50)); // 2112



// Function to calculate distance traveled in feet
function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * 264;
}
console.log(distanceTravelledInFeet(34, 38)); // 1056

function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const distanceInFeet = Math.abs(start - destination) * feetPerBlock;

  if (distanceInFeet <= 400) {
    return 0; // Free sample
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    const chargeableFeet = distanceInFeet - 400;
    return chargeableFeet * 0.02; // 2 cents per foot
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25; // Flat rate of $25
  } else {
    return "cannot travel that far"; // Ride not allowed
  }
}
