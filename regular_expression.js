let re;

re = /hello/i; // flag case insensitive
// re = /hello/g; // flag global search

// exec - return result in array or  null

// const result = re.exec('juan hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);


// test() = true or false
const result = re.test('Hello');
console.log(result)
console.log(`${re.source} match ${result.input}` )



// match() = return result array or null

// const str = 'hello There';
// const result = str.match(re);
// console.log(result.index);


// search = return index of the first match else return -1  
// const str = "brad hello world";
// const result = str.search(re);
// console.log(result);


// replace() = replace new string of searching

// const string = 'hello world';
// const result = string.replace(re,'hi');
// console.log(result);