import OrderModel from '../model.js';
import FormView from './form.view.js';
import TestModel from './form.test-data.js';

const order = new OrderModel();
const formView = new FormView();
const dataTest = new TestModel();

// Генерация тестовых данных
const data = dataTest.generate();
formView.renderForm(data)

// --------------------------------
// Добавление заявки
// --------------------------------
formView.elements.form.addEventListener('submit', function (e) {
    e.preventDefault();

    // получаем данные из View и формируем объект добавления в модель
    let inputObject = formView.formData();

    // Добавляем объект в Model
    const newTask = order.addOrder(inputObject);

    // Генерируем новые данные
    const data = dataTest.generate();
    formView.renderForm(data);
})