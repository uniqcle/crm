const LOCAL_STORAGE_KEY = 'tasks';
const LOCAL_STORAGE_FILTER_KEY = 'filter';

export default class OrderModel {

    productList = {
        'course-html': 'Курс по верстке',
        'course-js': 'Курс по JavaScript',
        'course-vue': 'Курс по VUE JS',
        'course-php': 'Курс по PHP',
        'course-wordpress': 'Курс по WordPress'
    }

    // назначаем объект фильтр 
    filter = this.getFromStorageFilter();

    constructor() {
        this.orders = this.getFromStorage();
    }

    // Получение заявки по id
    getByID(id) {
        let entries = this.orders;

        let indx = entries.findIndex(item => item.id === id);

        return entries[indx]
    }

    // Получить кол-во новых заявки
    getCountNewOrders() {
        return this.orders.filter(item => item.status === 'new').length
    }

    // Добавление заявки в модель
    addOrder(inputObject) {

        let id = (this.orders.length > 0) ? this.orders[this.orders.length - 1].id + 1 : 1;

        const newOrder = {
            id: id,
            date: new Date().toISOString(),
            status: 'new',
            ...inputObject
        }

        let prepareOrder = this.prepareOrder(newOrder);

        this.orders.push(prepareOrder);

        this.setToStorage();

        return newOrder;
    }

    //Обновление заявки (поля + обновление даты)
    updateOrder(updatedOrder) {

        let indxUpdatedOrder = this.orders.findIndex(item => item.id === updatedOrder.id)

        const preparedOrder = this.prepareOrder(
            {
                ...updatedOrder,
                date: new Date().toISOString()
            })

        this.orders.splice(indxUpdatedOrder, 1, preparedOrder)
        this.setToStorage();
    }

    // Получение заявки из localStorage
    getFromStorage() {
        let dataFromStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (dataFromStorage) {
            return JSON.parse(dataFromStorage);
        } else {
            return [];
        }
    }


    // Добавление заявки в localStorage
    setToStorage() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.orders))
    }

    // получаем из localStorage фильтр
    getFromStorageFilter() {
        let filter = {
            'product': 'all',
            'status': 'all',
        }

        let filterFromStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FILTER_KEY));

        if (filterFromStorage) {
            return filterFromStorage
        }

        return filter;
    }

    // устанавливаем в localStorage фильтр
    setToStorageFilter() {
        localStorage.setItem(LOCAL_STORAGE_FILTER_KEY, JSON.stringify(this.filter));
    }

    // форматирование заявки 
    prepareOrder(order) {

        const statusLabels = {
            'new': 'Новая',
            'inwork': 'В работе',
            'complete': 'Завершена'
        }

        return {
            ...order,
            date: new Date(order.date).toLocaleDateString(),
            dateTime: new Date(order.date).toLocaleTimeString(),
            productName: this.productList[order.product],
            statusName: statusLabels[order.status]
        }
    }

    getFilter() {
        return this.filter;
    }

    //изменяем фильтр
    changeFilter(type, value) {

        this.filter[type] = value;
        this.setToStorageFilter();

        return this.filter;
    }

    // фильтрация заявок на основе фильтра
    filterOrders(filter) {

        // по-умолч. отображаем все заявки
        let filteredOrders = this.orders;

        // если селект product изменент
        if (filter['product'] !== 'all') {
            filteredOrders = this.orders.filter(order => {
                return order.product === filter['product']
            })
        }

        // если селект статус изменен
        if (filter['status'] !== 'all') {
            filteredOrders = filteredOrders.filter(order => {
                return order.status === filter['status']
            })
        }

        return filteredOrders;
    }

}