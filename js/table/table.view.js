export default class TableView {
    elements = {
        tbody: document.querySelector('#tbody'),

    }


    renderEntry(order) {

        const badges = {
            new: 'badge-danger',
            inwork: 'badge-warning',
            complete: 'badge-success'
        }

        const orderHTML = `
        <tr>
            <th scope="row">${order['id']}</th>
            <td>${order.date}</td>
            <td>${order.productName}</td>
            <td>${order.name}</td>
            <td>${order.email}</td>
            <td>${order.phone}</td>
            <td>
                <div class="badge badge-pill ${badges[order.status]}">${order.statusName}</div>
            </td>
            <td>
                <a href="edit.html?id=${order.id}">Редактировать</a>
            </td>
        </tr>
        `;

        this.elements.tbody.insertAdjacentHTML('beforeend', orderHTML)

    }
}