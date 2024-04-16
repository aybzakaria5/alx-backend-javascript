function cleanSet(set, startstring) {
    // If either argument is falsy or not of the expected type, return an empty string
    if (!set || !startstring || !(set instanceof Set) || typeof startstring !== 'string') {
      return '';
    }
  
    // Initialize an empty array to store the filtered values
    const filteredValues = [];
  
    // Iterate over the set
    for (const value of set) {
      // Check if the value starts with startstring
      if (value && value.startsWith(startstring)) {
        // If yes, push the modified value to the filteredValues array
        filteredValues.push(value.replace(startstring, ''));
      }
    }
  
    // Join the filtered values with '-'
    return filteredValues.join('-');
  }
  
  export default cleanSet;
  