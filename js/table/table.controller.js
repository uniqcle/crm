import OrderModel from '../model.js';
import TableView from './table.view.js';

const order = new OrderModel();
const tableView = new TableView();

function init() {
    setupEventListeners()

    // отображаем заявки. Если есть в localStorage фильтры,
    // то предварительно прогоняем через фильтры
    const filter = order.getFilter();
    const filteredOrders = order.filterOrders(filter)

    filteredOrders.forEach(order => {
        tableView.renderEntry(order);
    })

    // кол-во новых заявок
    const newOrdersCount = order.getCountNewOrders();

    // передаем все данные для отображения
    tableView.updateFilter(filter);
    tableView.showCountNewOrders(newOrdersCount);
}

// установка слушателей
function setupEventListeners() {
    tableView.elements.productSelect.addEventListener('change', filterProduct);
    tableView.elements.topStatusBar.addEventListener('click', filterStatus);

    tableView.elements.leftStatus.forEach(item => {
        item.addEventListener('click', filterStatus);
    })
}

// фильтрация по продукту
function filterProduct(e) {
    const productSelect = e.target.value;
    tableView.elements.tbody.innerHTML = '';

    // получаем отредактированный объект фильтр из модели
    const filter = order.changeFilter('product', productSelect)

    // производим фильтрацию заявок по объекту фильтр
    const filteredOrders = order.filterOrders(filter)

    // отображаем отфильтр. заявки
    filteredOrders.forEach(item => {
        tableView.renderEntry(item);
    })

}

// фильтрация по статусу
function filterStatus(e) {
    e.preventDefault();

    const statusSelect = e.target.dataset.value;
    tableView.elements.tbody.innerHTML = '';

    // получаем отредактированный объект фильтр из модели
    const filter = order.changeFilter('status', statusSelect);

    // производим фильтрацию заявок по объекту фильтр
    const filteredOrders = order.filterOrders(filter);

    // отображаем отфильтр. заявки
    filteredOrders.forEach(item => {
        tableView.renderEntry(item);
    })

    // обновление
    tableView.changeStatusBar(filter['status']);
    tableView.changeLeftStatusBar(filter['status'])
}



init();


