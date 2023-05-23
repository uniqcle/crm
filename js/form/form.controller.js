import OrderModel from '../model.js';
import FormView from './form.view.js';
import TestModel from './form.test-data.js';

const order = new OrderModel();
const formView = new FormView();
const dataTest = new TestModel();

function init() {
    renderTestData();
    setupEventListeners();
}

function setupEventListeners() {
    formView.elements.form.addEventListener('submit', addFormData)
}

// Генерация тестовых данных
function renderTestData() {
    const data = dataTest.generate();
    formView.renderForm(data)
}


// Добавление заявки
function addFormData(e) {
    e.preventDefault();

    // получаем данные из View и формируем объект добавления в модель
    let inputObject = formView.getFormData();

    // Добавляем объект в Model
    const newTask = order.addOrder(inputObject);

    formView.clearForm();

    // Генерируем новые данные
    renderTestData();
}




init(); 