# DevTools - Debugging

What was the bug?

The bug was that the numbers are being taken as strings after being scanned in the input. This means that when we add then values together, we don't get addition, but string concatenation which leads the numbers to just join together and not perform the proper addition. Also, there was some missing semicolons in the .js file.

How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.

All of the logic is correct, so the only thing that needs to be changed is the types of `num1` and `num2`. This can be done using `parseInt(string)` which takes a string and converts it into an number equivalent. Now when running the `num1 = 4` and `num2 = 5` we get the proper answer of `result = 9` instead of `result = 45`.