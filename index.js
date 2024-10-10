//1. Вывести сумму чисел от 1 до N//

const numb = 10;
function sum(arg) {
    let i = 1;
    let result = 0;
    while (i <= arg) {
        result = result + i;
        i = i + 1;
    }
    return result
}

console.log(sum(numb))

// 2. Вывести факториал числа N //

function fact(arg) {
    let i = 1;
    let result = 1;
    while (i <= arg) {
        result = result * i;
        i = i + 1
    }
    return result
}
console.log(fact(numb))

//3. Вывести четные и нечетные числа от 1 до 100//
function evenNumber (arg1, arg2) {
    let result = "";
    let i = arg1;
    while (i <= arg2) {
        if (arg1 % 2 == 0) {
            result = result + i + " ,";
            i = i + 2
        } else {
            result = result + i + " ,";
            i = i + 2
        }
    }
    return result
}
console.log(evenNumber(1, 100))

//4. Вывести проверку на простое число//

function isPrimeNumber(number) {
    let i = 2;
    while (i < number) {
        if (number % i != 0) {
            i = i + 1;
            return true;
        } else {
            return false
        }
    }
}

console.log(isPrimeNumber(10))

//5. Вывести таблицу умножения для числа N//

function multiplicity(number) {
    let i = 1;
    result = ""
    while (i <= number) {
        result = result + (number * i) + ", ";
        i = i + 1;
    }
    return result
}
console.log(multiplicity(5))

//6. Вывести сумму цифр числа N//
function sumNumber(number) {
    let notNumber = String(number);
    let i = 0;
    let result = 0;
    while (i < ((notNumber.length))) {
        result = result + Number(notNumber[i]);
        i = i + 1;
    }
    return result
}

console.log(sumNumber(123))

//7. Обратное число//
function inverse(number) {
    result = (1 / number);
    return result
}

console.log(inverse(2))

//8. Количество цифр в числе N//
function quantNum(number) {
    result = String(number).length;
    return result
}

console.log(quantNum(85590))

//9. Проверка палиндрома для числа N//
 function isPalindrom(number) {
    let str1 = String(number);
    let str2 = str1.split("").reverse().join("");
    if (str1 === str2) {
        return true
    } else {
        return false
    }
 }
 console.log(isPalindrom(1221))

 //10. Сумма квадратов чисел от 1 до N//
 function sumSquar(arg1, arg2) {
    let i = arg1;
    result = 0;
    while (i <= arg2) {
        result = result + (i ** 2);
        i++;
    }
    return result
 }

 console.log(sumSquar(2, 4))