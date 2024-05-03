import { HTTP_REQUEST } from './request.js';
import { COMPLETE_URI } from './config.js';

const GET_DISH = () => {
    const DISH_NAME = document.getElementById('nombrePlato').value;
    const DESCRIPTION = document.getElementById('descripcion').value;
    const PRICE = parseFloat(document.getElementById('precio').value);

    if (DISH_NAME === "" || DESCRIPTION === "" || isNaN(PRICE)) {
        throw ("ERROR REQUIRED DATA IN THE FORM");
    }

    return {
        "nombrePlato": DISH_NAME,
        "descripcion": DESCRIPTION,
        "precio": PRICE
    };
};

const SEND_DISH = () => {
    const SEND_DISH_BUTTON = document.getElementById('boton_enviar_plato');
    SEND_DISH_BUTTON.addEventListener("click", async (e) => {
        e.preventDefault();
        try {
            await HTTP_REQUEST(COMPLETE_URI, "POST", GET_DISH());
            location.reload();
        } catch (error) {
            Swal.fire("ERROR!", "Form data missing", "error");
        }
    });
};

export {
    SEND_DISH
};
