const DISH_TEMPLATE = (idDish, name, description, price) => {
    return `
    <tr>    
        <td>${idDish}</td>
        <td>${name}</td>
        <td>${description}</td>
        <td>${price}</td>
        <td>
            <img src="../img/btnEdit.png" width="20px" id="btnEdit-${idDish}" class="btnEdit">
            <img src="../img/btnDelete.png" width="20px" id="btnDelete-${idDish}" class="btnDelete">
        </td>
    </tr>
  `;
};

export {
    DISH_TEMPLATE
};
