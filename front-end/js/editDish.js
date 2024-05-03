import {
    COMPLETE_URI
} from './config.js';
import { HTTP_REQUEST } from './request.js';

const EDIT_DISH = () => {
    document.addEventListener("click", event => {
        if (event.target.matches("[id^='btnEdit']")) {
            const dishId = event.target.id.split('-')[1];
            const content = document.createElement('div');

            const hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.id = 'hiddenInput';
            hiddenInput.value = dishId;
            content.appendChild(hiddenInput);
        
            const textarea = document.createElement('textarea');
            textarea.placeholder = 'Enter the new description';
            textarea.id = 'descriptionInput';
            content.appendChild(textarea);
        
            return Swal.fire({
                title: "Enter the new description",
                html: content,
                preConfirm: async () => {
                    const description = document.getElementById('descriptionInput').value;
                    const dishId = document.getElementById('hiddenInput').value;
                    const uri = `${COMPLETE_URI}/${dishId}`;
                    const data = { description };
                    HTTP_REQUEST(uri, 'PUT', data);
                    location.reload();
                }
            });
        }
    });
};

export {
    EDIT_DISH
};
