let userName = 'Nikita';

function userGreeting(userName) {
    if (Boolean(userName) == true)
        {result = 'Hello, ' + userName + '!' 
        } else {result = 'Hello, guest!'}

    return result    
    } 

console.log(userGreeting(userName));



function getExpression (num1, num2 = 1) {
    result = num1 ** num2
    return result
}

console.log(getExpression(3, 2))

const string = 'aaaaaaaa'

function printString (string) {
   firstLet = string[0].toUpperCase();
   return firstLet + string.slice(1)}

console.log(printString(string))