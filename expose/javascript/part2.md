### Part 2-Question 1: ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

It will return the number `3`. This is because in the for loop, it will when the iterator i is the same as the length as the input list. The input is length 3 so this means that it will break out at `i = 3` and since it is a var, the value is saved outside of the function and is printed.

### Part 2-Question 2: ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

It will return the number `150`. This is because in the for loop, the discounted price is replaced for every iteration. This means that at the end of the loop, it will be eqivalent to the highest index element in the input. Since the discount is applied, we get the 50% discount of that final value and will get out answer.

### Part 2-Question 3: ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^

It will return the number `150`. This is because in this function, `var finalPrice` handles the case where the discount isn't a valid price. Since the last assignment is the last of the input like last question, then `finalPrice` would be the correction of that value. Since the value if 300 splits perfectly into 150, there is no change from discountedPrice to finalPrice. So it will return that number.
