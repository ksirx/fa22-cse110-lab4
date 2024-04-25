# A litte More of a Challenge...

### Part 2-Question 1: ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

It will return the number `3`. This is because in the for loop, it will when the iterator i is the same as the length as the input list. The input is length 3 so this means that it will break out at `i = 3` and since it is a var, the value is saved outside of the function and is printed.

### Part 2-Question 2: ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

It will return the number `150`. This is because in the for loop, the discounted price is replaced for every iteration. This means that at the end of the loop, it will be eqivalent to the highest index element in the input. Since the discount is applied, we get the 50% discount of that final value and will get out answer.

### Part 2-Question 3: ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^

It will return the number `150`. This is because in this function, `var finalPrice` handles the case where the discount isn't a valid price. Since the last assignment is the last of the input like last question, then `finalPrice` would be the correction of that value. Since the value if 300 splits perfectly into 150, there is no change from discountedPrice to finalPrice. So it will return that number.

### Part 2- Question 4: ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^

It will return a list of all the discounted prices `[50, 100, 150]`. This is because after each discounted price is found for each iteration, it is put inside of  `discounted` which is a list and which returned at the very end of the function.

### Part 2 - Question 5: ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

It will return an `error`. This is because now iterator `i` is defined using let which means once it exits the for loop, its value is forogtten. Since the print is outside of the for loop, i doesn't exist and returns an error.

### Part 2 - Question 6: ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^

It will also return an `error`. This is because similar to the last problem, `discountedPrice` is defined inside of the for loop with `let`. This means that it is also forgotten after the loop is ended and when trying to print, it will no be defined.

### Part 2 - Question 7: ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^

Here it will return `150`. This is because even though `finalPrice` was defined with let, it was defined outside of the for loop. This means that after it was modified in the for loop and it was ended, the value was still not fogotten. Thus, it will print out the last individual discounted price.

### Part 2 - Question 8: ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

Here it will return  `[50, 100, 150]` for similar reasons to question 4. Even though discounted uses `let`, since it is still visible in the function code block, it will still be returned as desired after modification in the for loop.

### Part 2 - Question 9: ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^

Here it will return `error` because the i in the for loop is defined with let and after the loop ends, the `i` will be forgotten. When trying to print i, an error will occur.

### Part 2 - Question 10: ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^

Here, it will return the value `3`. This is because initially in the function, length was defined as the length of the input prices which there is three of them total. Now `length` is a immutable value and will be printed as desired.


### Part 2 - Question 11: ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^

This function will return `[50, 100, 150]` because the array reference to `discounted` is a constant, but can still be modified. This means that the function will continue as normal and the value returned will be the same as question 8 and 4.

# Data Types

### Part 2 - Question 12: Given the above Object, write the notation for:  (These should be in your part2.md)
A) Accessing the value of the name property in the student object

`student.name`

B) Accessing the value of the Grad Year property in the student object

`student['Grad Year']`

C) Calling the function for the greeting property in the student object

`student.greeting()`

D) Accessing the name property of the object in the Favorite Teacher property in student

`student["Favorite Teacher"].name`

E) Access index zero in the array of the courseLoad property of the student object

`student.course[0]`

# Basic Operators & Type Conversion

# Loops


# Functions

# serInterval(), setTimeout(), clearTimeout()

