### Part 1-Question 1: What is printed by line 9? If the code returns an error, explain why. ^^^^^

It will return `values added: 20`.

### Part 1-QUestion 2: What is printed by line 13? If the code returns an error, explain why. 

It will return `final result: 20`.

### 3. What is printed by line 9? If the code returns an error, explain why. ^^^^^

It will return `values added: 20`.

### 4. What is printed by line 13? If the code returns an error, explain why. 

Here it will return an `error`. This is because when using `let result = 0`, the value stored in result is forgotten since it is only local to the `if` code block. So, when trying to print out the result, there is an error since technically, result doesn't exist oustide the if statement. 

### 5. What is printed by line 9? If the code returns an error, explain why. ^^^^^

Here it will return an `error`. This is because after declaring result as 0, we are trying to reassign its value to `num1 + num2`. By definition, we cannot do this, so it throws an error.

### 6. What is printed by line 13? If the code returns an error, explain why. 

Here, `nothing` will be printed because it encounters the error at line 9 before it can reach line 13. Without the error at line 9, since `const ` has the same scope as `let`, it must return the same error as in `4` because the number stored in result is forgotten outside the if code block. 
