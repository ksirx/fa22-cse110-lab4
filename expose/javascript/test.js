/*Part 1 Q1,2*/
/*function sumValues(num1, num2, add) {

    if (add) {

        var result = 0;

        result = num1 + num2;

        console.log('values added: ', result);

    } else return;

    console.log('final result: ', result);
}

sumValues(10, 10, true);*/

/*Part 1 Q3,4*/
/*function sumValues(num1, num2, add) {

    if (add) {

        let result = 0;

        result = num1 + num2;

        console.log('values added: ', result);

    } else return;

    console.log('final result: ', result);
}

sumValues(10, 10, true);*/

/*Part 1 Q5,6*/
/*function sumValues(num1, num2, add) {

    if (add) {

        const result = 0;

        result = num1 + num2;

        console.log('values added: ', result);

    } else return;

    console.log('final result: ', result);
}

sumValues(10, 10, true);*/

/*Part 2 Q1*/
/*function discountedPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(i);
    //console.log(discountedPrice);
    // console,log(finalPrice);

    return discounted;
}

discountedPrices([100, 200, 300], 0.5);*/

/*Part 2 Q2*/
/*function discountedPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    //console.log(i);
    console.log(discountedPrice);
    // console,log(finalPrice);

    return discounted;
}

discountedPrices([100, 200, 300], 0.5); */

/*Part 2 Q3*/
function discountedPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    //console.log(i);
    //console.log(discountedPrice);
     console.log(finalPrice);

    return discounted;
}

discountedPrices([100, 200, 300], 0.5);

