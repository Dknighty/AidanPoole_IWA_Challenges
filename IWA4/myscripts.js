const date = 2050
const statuses = 'parent' // did not have = but instead : 
const count = 0

if (date = 2050) {
	console.log("January", 'New Year’s Day') // added bracket 
	console.log("March", 'Human Rights Day') 
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
    count = count + 4
}

   
	if (statuses = 'student') {
	  console.log('June', 'Youth Day')
		let count = count + 1
  }


	if (statuses = "parent") {
	console.log(date, 'Christmas Day')
	let count = count + 1
	console.log(date, 'Day of Goodwill')
	count = count + 1
    console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	count = count + 3
}

console.log('Your status is:', statuses)
console.log('The year is:', date)
console.log('The total holidays is:', count)