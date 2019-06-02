let re;

// literal Characters
re = /hello/i;




// javascript common function to validate regular expression


// exec - return result in array or  null

// const result = re.exec('juan hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);


// test() = true or false
//const result = re.test('Hello');
//console.log(result)
//console.log(`${re.source} match ${result.input}` )


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



// Metacharacter Symbols
re = /^h/i //must start with h with flag incase sensitive
re = /n$/i //must end swith
re = /^hello world$/i //must begin and end swith;
re = /h.llo/i //matches one any character  ;
re = /h*llo/i //matches any character 0 or more times  ;
re = /gre?a?y/i //optional character
re = /gre?a?y /i //escape character 


// Brackets [] - Character Sets
re = /gr[ea]y/i; //Must be an a or e 
re = /[GF]rey/; //Must begin with G or F
re = /[^GF]ray/i //Match anything except G or F
re = /[a-z]r[ea]y/; // match lower case letter
re = /[A-Z]r[ea]y/; // match upper case letter
re = /[A-Za-z]r[ea]y/; // match lower and upper case  letter
re = /[0-3][0-9]rey/; // match lower and upper case  letter



// BRACES {} QUANTIFIERS

re = /hel{2}o/i; // exactly {n} amount of times
re = /hel{2,4}o/i; // exactly {n} amount of times with limit
re = /hel{1 ,}o/i; // any {n} amount of times 

// Parenthesis Grouping () 

re = /^([0-9]x){3}$/ 

// Shorthand Character Classes

re = /\w/; //Match Word Character - alpha numeric or _
re = /\w+/; // + = one or more times
re = /\W/; // + = one or more times
re = /\d/; // Match Any digits
re = /\d+/; // Match Any digits
re = /\D/; // Match Non Any digits
re = /\s/; // Match Space
re = /\S/; // Match all non Space


//Assertions

re = /x(?=y)/ //match charcter afterx 



str = 'wwwww'; // matching string


const reTest = (re, str) =>{
	if (str.match(re)) {
		console.log(`${str} Match ${re.source}`);
	}else{
		console.log(`${str} Does not Match ${re.source}`);
	}
}



const execTest = (re,str) =>{
	if (re.exec(str)) {
		console.log(re.exec(str))
	}else{
		console.log(re.exec(str))

	}
}

execTest(re,str);
reTest(re,str);

