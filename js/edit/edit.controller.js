import OrderModel from '../model.js';
import EditView from './edit.view.js';

const order = new OrderModel();
const editView = new EditView();

// Получаем id из адресной строки
const paramsFromUrl = new URLSearchParams(location.search)
const id = parseInt(paramsFromUrl.get('id'));

// Получаем необходимую запись из модели
let entry = order.getByID(id)

// Отображаем форму с заполненными данными с этой записью
editView.renderOrder(entry);

console.log(editView.elements.name)


editView.elements.form.addEventListener('submit', function (e) {
    e.preventDefault();

    //console.log(entry)

    const inputObject = {
        name: editView.elements.name
    }

    console.log(inputObject)

    console.log('test111')



})