import { HTTP_REQUEST } from './request.js';
import { DISH_TEMPLATE } from './template.js';
import { LIST_ALL_URI } from './config.js';

console.log(LIST_ALL_URI);

const LIST_DISHES = async () => {
    const TABLE_BODY = document.getElementById("tbody");
    const DISH_DATA = await HTTP_REQUEST(LIST_ALL_URI, "GET");
    DISH_DATA.forEach(dish => {
        TABLE_BODY.innerHTML += DISH_TEMPLATE(dish.idPlato, dish.nombrePlato, dish.descripcion, dish.precio);
    });
};

export {
    LIST_DISHES,
};
