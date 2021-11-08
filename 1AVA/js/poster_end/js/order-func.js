
// Save an order of user in the object storage 
export function saveOrderInStorage() {

	// A simple object order width data modal HTML
	let order = {
		"id": document.querySelector("#order_id").value,
		"posterName": document.querySelector("#order_name").innerHTML,
		"quantity": document.querySelector("#order_quantity") .value,
		"price": document.querySelector("#order_price").value,
		"size": document.querySelector("input[name='order_size']:checked").value
	};

	// Hide the modal window
	$('#pedido').modal('hide');

	// Order is a JSON object, but we need to save it like a string in the local storage
	localStorage.setItem("order", JSON.stringify(order));

	console.info("Comanda desada correctament:" + order);
	window.location.href = "order.html";

}
