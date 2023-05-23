export default class EditView {
	elements = {
		form: document.querySelector('#form'),
		number: document.querySelector('#number'),
		id: document.querySelector('#id'),
		date: document.querySelector('#date'),
		product: document.querySelector('#product'),
		name: document.querySelector('#name'),
		email: document.querySelector('#email'),
		phone: document.querySelector('#phone'),
		status: document.querySelector('#status'),

	}

	// отображение заявки для редактирования
	renderOrder(entry) {
		this.elements.id.value = entry.id;
		this.elements.number.textContent = entry.id;
		this.elements.date.textContent = `${entry.date} ${entry.dateTime}`;
		this.elements.product.value = entry.product;
		this.elements.name.value = entry.name;
		this.elements.email.value = entry.email;
		this.elements.phone.value = entry.phone;
		this.elements.status.value = entry.status;
	}
}