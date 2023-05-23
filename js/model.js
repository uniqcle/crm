const LOCAL_STORAGE_KEY = 'tasks';

export default class OrderModel {

    constructor() {
        this.orders = this.getFromStorage();
    }

    getAll() {
        return this.orders;
    }

    getByID(id) {
        let entries = this.orders;

        let indx = entries.findIndex(item => item.id === id);

        return entries[indx]
    }

    // --------------------------------
    // Добавление заявки в модель
    // --------------------------------
    addOrder(inputObject) {

        //const { name, email, phone, product } = inputObject

        let id = 1;

        if (this.orders.length > 0) {
            id = this.orders[this.orders.length - 1].id + 1;
        }

        const newOrder = {
            id: id,
            date: new Date().toLocaleDateString(),
            status: 'new',
            ...inputObject
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