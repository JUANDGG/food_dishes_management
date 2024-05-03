import { LIST_DISHES } from './listDish.js';
import { SEND_DISH } from './sendDish.js';
import { EDIT_DISH } from './editDish.js';
import { DELETE_DISH } from './deleteDish.js';

document.addEventListener("DOMContentLoaded", () => {
    LIST_DISHES();
    SEND_DISH();

    setTimeout(() => {
        EDIT_DISH();
        DELETE_DISH();
    }, 100);
});
