function adjacentElementsProduct(inputArray) {
    let largestProduct = inputArray[0] * inputArray[1];
    
    for (let i = 1; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];
        if (product > largestProduct) {
            largestProduct = product;
        }
    }
    return largestProduct;
}