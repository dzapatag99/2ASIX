export function validateOblFields(nif, name, surname, date) {
  if (nif === "" || name === "" || surname === "" || date === "") {
    return false;
  } else {
    return true;
  }
}

export function validateNif(nif) {
  return /^[0-9]{8,8}[A-Za-z]$/.test(nif);
}

export function validateData(date, format="dd/mm/aaaa"){
	let regex=/^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
	if (format=="dd-mm-aaaa")
		regex=/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
	return regex.test(date);
}

export function validateDateMinorThanToday(date){
	let dateToday= new Date();
	//any mes dia
	let aDate = date.split("-");
	let bornDate = new Date(aDate[0], aDate[1]-1, aDate[2]);
	return bornDate < dateToday;
}


