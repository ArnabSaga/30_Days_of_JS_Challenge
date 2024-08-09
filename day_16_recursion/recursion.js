// Activity-1: Basic Recursion
console.log("___Task-1___");

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); //120
console.log(factorial(0)); //1
console.log(factorial(7)); //5040

console.log("___Task-2___");

function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(factorial(2)); //2
console.log(factorial(0)); //1
console.log(factorial(3)); //6

// Activity-2: Recursion with Array
console.log("___Task-3___");

function maxArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const maxRest = maxArray(arr.slice(1))
    return arr[0] > maxRest ? arr[0] : maxRest;
}

console.log(maxArray([1, 5, 3, 9, 2])); // 9
console.log(maxArray([10])); // 10
console.log(maxArray([-1, -5, -3, -9, -2])); // -1

console.log("___Task-4___");

function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([])); // 0
console.log(sumArray([10, 20, 30])); // 60

// Activity-3: String Manipulation with Recursion
console.log("___Task-5___");

function reverseArray(arr) {
    if (str === "") {
        return "";
    }
    return reverseArray(arr.slice(1)) + arr[0];
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("")); // ""
console.log(reverseString("recursion")); // "noisrucer"


console.log("___Task-6___");

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("madam")); // true

// Activity-4: Recursive Search
console.log("___Task-7___");

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, high);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0

console.log("___Task-8___");

function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 4, 3, 3], 3)); // 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0
console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // 5

// Activity-5: Tree Traversal(Optional)
console.log("___Task-9___");

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(root) {
    if (root === null) {
        return;
    }
    inOrderTraversal(root.left);
    console.log(root.value);
    inOrderTraversal(root.right);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrderTraversal(root); 

console.log("___Task-10___");

function treeDepth(root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = treeDepth(root.left);
    const rightDepth = treeDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

// Test case
let root2 = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(treeDepth(root2)); // 1