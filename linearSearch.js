function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`Element found at index: ${i}`);
            return i; // Return index where element is found
        }
    }
    console.log("Element not found");
    return -1; // Return -1 if element is not found
}

// Example usage
let numbers = [10, 25, 47, 32, 89, 56];
let target = 32;
linearSearch(numbers, target);
