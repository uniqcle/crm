import OrderModel from '../model.js';
import EditView from './edit.view.js';

const order = new OrderModel();
const editView = new EditView();

function setupEventListeners() {
    editView.elements.form.addEventListener('submit', saveOrder)
}

function init() {
    setupEventListeners();
}

function getParamURL() {
    // Получаем id из адресной строки
    const paramsFromUrl = new URLSearchParams(location.search)
    return parseInt(paramsFromUrl.get('id'));
}

function saveOrder(e) {
    e.preventDefault();

    const updatedOrder = editView.getFromEditForm();

    // записали данные в модель и обновили LocalStorage
    //console.log(updatedOrder)
    order.updateOrder(updatedOrder);
    window.location = './table.html'
}

init();

const id = getParamURL();

// Получаем необходимую запись из модели и отображаем
const entry = order.getByID(id)
editView.renderOrder(entry);






