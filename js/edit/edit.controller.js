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

    const formData = new FormData(editView.elements.form)

    const updatedOrder = {
        id: formData.get('id'),
        name: formData.get('name'),
        email: formData.get('email'),

    }

    // записали данные в модель по id
    order.updateOrder(updatedOrder)
}

init();

const id = getParamURL();

// Получаем необходимую запись из модели и отображаем
const entry = order.getByID(id)
editView.renderOrder(entry);






