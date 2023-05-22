export default class TableView {
    elements = {
        tbody: document.querySelector('#tbody'),

    }


    renderEntry(order) {
        console.log(order);

        const orderHTML = `
        <tr>
            <th scope="row">${order['id']}</th>
            <td>01.04.2020</td>
            <td>${order['product']}</td>
            <td>${order['name']}</td>
            <td>${order['email']}</td>
            <td>${order['phone']}</td>
            <td>
                <div class="badge badge-pill badge-warning">В работе</div>
            </td>
            <td>
                <a href="edit.html">Редактировать</a>
            </td>
        </tr>
        `;

        this.elements.tbody.insertAdjacentHTML('beforeend', orderHTML)

    }
}