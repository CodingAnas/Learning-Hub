function helpme(help)
{
	let answer;
	switch(help)
	{
	case "i am going to die":
		answer = "send ambulance";
		break;
	case "i am being pursuit":
		answer = "911";
		break;
	case "i want to surrender":
		answer = "come to near station";
		break;
	default:
		answer = "Go to doctor";
		break;
	}
	console.log(answer);
}

const compose = (f ,g) => (a) => (f(g(a)));
const sum = (a) => a+1;


// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢'; 
let rabbit = '🐇';

turtle = turtle.padStart(6);
rabbit = rabbit.padStart(6);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

'rabbit get padded at end with the secodnargument beign filled in it'
// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

let myname;
let cnt = 0;
Object.entries(obj).forEach(key => {
	if(cnt === 0)
	{
		myname =key[0] + " " + key[1];
	}
	else
	{
		myname = myname + " " + key[0] + " " + key[1];
	}
	cnt = cnt + 1;
	
})
console.log(myname);

const que = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function findMax(Array)
{
	let max = Array[0];
	for(num of Array)
	{
		if(num>max)
		{
			max = num;
		}
	}
	return max;
}
function findMin(Array)
{
	let min = Array[0];
	for(num of Array)
	{
		if(num<min)
		{
			min = num;
		}
	}
	return min;
}

function answer(Array)
{
	let ans= [[]];
	let it = findMax(Array);
	let st = findMin(Array);
	for(let i=st; i<=it; i++)
	{
		let arr2 = [];
		let arr1;
		let flag = false;
		let flag2 = false;
		for(num of Array)
		{
			if(num === i && flag === false)
			{
				flag = true;
				arr1 = num;
			}
			else if( num === i && flag === true && flag2 === false)
			{
				arr2.push(num);
				arr2.push(num);
				flag2 = true;
			}
			else if(num === i)
			{
				arr2.push(num);
			}
		}
		if(flag === true)
		{
			if(flag2 === true)
				ans.push(arr1);
			else
				ans.push(arr2);
		}
	}
	return ans;
}
const ans = answer(que);
console.log(ans);

() =>