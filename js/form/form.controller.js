import OrderModel from '../model.js';
import FormView from './form.view.js';
import TestModel from './form.test-data.js';

const order = new OrderModel();
const formView = new FormView();
const dataTest = new TestModel();

dataTest.generate();


// --------------------------------
// Добавление заявки
// --------------------------------
formView.elements.form.addEventListener('submit', function (e) {
    e.preventDefault();

    // получаем данные из View и формируем объект добавления в модель
    let inputObject = {
        name: formView.elements.inputName.value,
        email: formView.elements.inputEmail.value,
        phone: formView.elements.inputPhone.value,
        product: formView.elements.productList.text
    }

    // Добавляем объект в Model
    const newTask = order.addOrder(inputObject);

    // Генерируем новые данные
    dataTest.generate();
})