const LOCAL_STORAGE_KEY = 'tasks';

export default class OrderModel {

    constructor() {
        this.orders = this.getFromStorage();
    }

    // --------------------------------
    // Добавление заявки в модель
    // --------------------------------
    addOrder(inputObject) {

        const { name, email, phone, product } = inputObject

        let id = 1;

        if (this.orders.length > 0) {
            id = this.orders[this.orders.length - 1].id + 1;
        }

        const newOrder = {
            id: id,
            name,
            email,
            phone,
            product
        }

        this.orders.push(newOrder);

        this.setToStorage();

        return newOrder;
    }

    // --------------------------------
    // Получение заявки из localStorage
    // --------------------------------
    getFromStorage() {
        let dataFromStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (dataFromStorage) {
            return JSON.parse(dataFromStorage);
        } else {
            return [];
        }
    }


    // --------------------------------
    // Добавление заявки в localStorage
    // --------------------------------
    setToStorage() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.orders))
    }

}