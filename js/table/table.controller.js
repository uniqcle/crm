import OrderModel from '../model.js';
import TableView from './table.view.js';

const order = new OrderModel();
const tableView = new TableView();

const orders = order.getAll();

orders.forEach(order => {
    tableView.renderEntry(order); 
})


