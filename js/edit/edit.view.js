export default class EditView {
    elements = {
        form: document.querySelector('#form'),
        id: document.querySelector('#number'),
        product: document.querySelector('#product'),
        name: document.querySelector('#name'),
        email: document.querySelector('#email'),
        phone: document.querySelector('#phone'),
        status: document.querySelector('#status'),

        cardHeader: document.querySelector('#cardHeader'),
        cardBody: document.querySelector('#cardBody')

    }

    renderOrder(entry) {
        console.log(entry)


        let entryHTML = `
        <div class="card-body" id="cardBody">
								<div class="row mb-3">
									<div class="col-md-2">
										<strong>ID:</strong>
									</div>
									<div class="col">Заявка №<span id="number">${entry.id}</span></div>
									<input name="id" type="hidden" id="${entry.id}">
								</div>

								<div class="row mb-3">
									<div class="col-md-2">
										<strong>Дата создания:</strong>
									</div>
									<div class="col" id="date">2020-04-20 13:52:13</div>
								</div>

								<div class="row mb-3">
									<div class="col-md-2">
										<strong>Продукт:</strong>
									</div>
									<div class="col">
										<select id="product" name="product" class="custom-select">
											<option value="course-html">Курс по верстке</option>
											<option value="course-js">
												Курс по JavaScript
											</option>
											<option value="course-vue">Курс по VUE JS</option>
											<option value="course-php">Курс по PHP</option>
											<option value="course-wordpress">
												Курс по WordPress
											</option>
										</select>
									</div>
								</div>

								<div class="row mb-3">
									<div class="col-md-2">
										<strong>Имя:</strong>
									</div>
									<div class="col">
										<input type="text" class="form-control" value="${entry.name}" id="name"
											name="name" />
									</div>
								</div>

								<div class="row mb-3">
									<div class="col-md-2">
										<strong>Email:</strong>
									</div>
									<div class="col">
										<input type="text" class="form-control" value="${entry.email}" id="email"
											name="email" />
									</div>
								</div>

								<div class="row mb-3">
									<div class="col-md-2">
										<strong>Телефон:</strong>
									</div>
									<div class="col">
										<input type="text" class="form-control" value="${entry.phone}" id="phone"
											name="phone" />
									</div>
								</div>

								<div class="row mb-3">
									<div class="col-md-2">
										<strong>Статус заявки:</strong>
									</div>
									<div class="col">
										<select class="custom-select" id="status" name="status">
											<option selected="">Выберите...</option>
											<option value="new">Новая</option>
											<option value="inwork">В работе</option>
											<option value="complete">Завершена</option>
										</select>
									</div>
								</div>
							</div>
        `;

        this.elements.cardHeader.insertAdjacentHTML('afterend', entryHTML);

    }
}