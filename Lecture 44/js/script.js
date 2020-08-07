// DEFAULT VALUES
function orderchickenwith(sidedish){
	// if (sidedish === undefined) {
	// 	sidedish="Rice";
	// }
	sidedish= sidedish || "Rice";
	console.log("Chicken with " + sidedish);
}

orderchickenwith("Noodles");
orderchickenwith();