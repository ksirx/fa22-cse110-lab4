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

### Part 2 - Question 13: Arithmetic

A) `32` because since the string 3 is first, it is being treated as string concatination so the 2 is being treated as a string creating 32 once the operation is completed.

B) `1` because the subtraction converts the string 3 to a int. From there the 2 is subtracted and the one is returned.

C) `3` because when doing integer addtion, null counts as 0 and when adding to 3, the number 3 will be returned from the operation.

D) `3null` because when doing string concatination on the string 3, null is treated as a string leading to it just concatenating together.

E) `4` because true is treated as the integer 1 and when added to 3, it will result in the value of 4 being returned.

F) `0` because the false is being treated as the integer 0 and with integer addition of null which has no value, it will return the value of 0.

G) `3undefined` because with string 3, it is being treated as string concatenation. So, undefined is being treated as a string and concatenated with three and being returned.

H) `NaN` because while the subtraction forces it to be integer subtraction and converts the 3 to an integer, you cannot subtract an integer by an undefined type so NaN is returned. 

### Part 2 - Question 14: Comparison

A) `true` because the value of 2 is greater than the value of 1 so it returns true.

B) `false` because it compares the leading values to see if equivalent, and 2 is larger than 1, it thinks '12' is smaller than '2' and returns false.

C) `true` because it looks if the characters are the same value, ignoring if the types are different and since they are both 2, it returns true.

D) `false` because this also take into account the type and since one is an integer and the other is a string, it will find that they are not equal to each other.

E) `false` because true's value is 1 and that is differnet from the value of 2, it returns false as it finds that they are different from one another.

F) `true` because `Boolean(2)` converts into `true` boolean value and since this is eqivalent in value and type to the first `true`, it returns true.

### Part 2 - Question 15: Explain the difference between the == and === operators.

The difference between the `==` and `===` operators are that the `==` doesn't consider the types and converts it to just the symbols whereas `===` will take into consideration if the types are different and won't auto convert to make them the same.

# Loops

### Part 2 - Questionn 16: Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)

COMPLETED

# Functions

### Part 2 - Question 17: If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 

Using these two functions together will return the list `[2,4,6]`. The `modifyArray` function iterates through all of a inputted array and applies the `callback` to every element and puts it into a `newArr` which is returned. The `doSomething` function just applies a multiplier to an integer and returns the new value. This is used as the `callback` and results in all of the input array being returned with the values multiplied by 2.

# setInterval(), setTimeout(), clearTimeout()

### Part 2 - Question 18:The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)

COMPLETED

### Part 2 - Question 19: What is the output of the above code? (This should be in your part2.md)

The output of the code will be

 `1`

 `4`

 `3`
 
 `2`