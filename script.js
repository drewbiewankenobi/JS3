var phone = prompt("What's your digits? " + "\n" +
					"We will never sell your private information","Use Dashes (303-555-555)")
if (phone.charAt(3) === '-' && phone.charAt(7) === '-') {
	alert("That is a valid phone number.")
}

var bDay = prompt("When were you born, baby?","Enter dd/mm/yy (01/01/15)")
if (bDay.charAt(2) === '/' && bDay.charAt(5) === '/') {
	alert("That is a valid birthday.")
}
//alter following to rep variable//

var zipCode = prompt("Let's get your zip code","5 or 9 digits (12345 OR 12345-1234)")
if (zipCode.length === 5 || (zipCode.length === 10 && zipCode.charAt(5) === '-')) {
	alert("That is a valid zip code.")
}

var stateLoc = prompt("And what state was that?","Two letters only (CO)")
if (stateLoc.length === 2 && stateLoc == stateLoc.toUpperCase()) {
	alert("That is a valid State")
}

var marryStatus = prompt("So... you married or what?","Yes or No")
if (marryStatus.toLowerCase() === 'yes' || marry.toLowerCase() === 'no') {
	alert("That is a valid marriage status.")
}