const LOCAL_STORAGE_KEY = 'tasks';

export default class OrderModel {

    productList = {
        'course-html': 'Курс по верстке',
        'course-js': 'Курс по JavaScript',
        'course-vue': 'Курс по VUE JS',
        'course-php': 'Курс по PHP',
        'course-wordpress': 'Курс по WordPress'
    }

    // назначаем объект фильтр 
    filter = {
        'product': 'all',
        'status': 'all'
    }

    constructor() {
        this.orders = this.getFromStorage();
    }

    // получение всех заявок
    getAll() {
        return this.orders;
    }

    // Получение заявки по id
    getByID(id) {
        let entries = this.orders;

        let indx = entries.findIndex(item => item.id === id);

        return entries[indx]
    }

    // Добавление заявки в модель
    addOrder(inputObject) {

        //const { name, email, phone, product } = inputObject

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

    //изменяем фильтр
    changeFilter(type, value) {
        this.filter[type] = value;
        return this.filter;
    }

    // фильтрация заявок
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