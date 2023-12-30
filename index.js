
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  
  const driversData = [
    { name: "John" },
    { name: "Jane" },
    { name: "Mike" },
    
  ];
  
  
  const matchedDrivers = findMatching(driversData, "John");
  console.log("Matching Drivers:", matchedDrivers);
  
  const fuzzyMatchedDrivers = fuzzyMatch(driversData.map(driver => driver.name), "Ja");
  console.log("Fuzzy Matching Drivers:", fuzzyMatchedDrivers);
  
  const nameMatchedDrivers = matchName(driversData, "Mike");
  console.log("Name Matching Drivers:", nameMatchedDrivers);
  
