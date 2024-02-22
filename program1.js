function isBalanced(str) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            if (lastOpeningBracket !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


const expression = "{[()]}";
console.log(isBalanced(expression)); 

const expression2 = "{[(])}";
console.log(isBalanced(expression2)); 



