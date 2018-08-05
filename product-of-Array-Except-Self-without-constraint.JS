/* Same probele of Finding Product of Array Except Self Javascript - But without Space and Time complexity */

productOfArrElementsExceptSelf = arr => {

    let result = [], product;

    for (let i = 0; i < arr.length; i++) {
        // Super important step, I have to reset the product before the next i value is run
        // Else I will get a result of [ 24, 288, 2304, 13824 ], as it will take the previous multiplication value of product
        // And also conceptually, when I am keeping one element fixed and calculating the produce ot the other elements - that means
        // Before starting the next product calculation, I am assuming the intial product value is 1
        product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j ) product *= arr[j]
        }
        result.push(product);
    }
    return result;
}

console.log(productOfArrElementsExceptSelf([1, 2, 3, 4]))