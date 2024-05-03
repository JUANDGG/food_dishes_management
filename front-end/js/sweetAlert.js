import { PETICION_HTTP } from './request.js';
import { URI_COMPLETE } from './config.js';

const ERROR_ALERT = (errorDescription) => {
    return swal("ERROR!", errorDescription, "error");
};

const INPUT_ALERT = (idPlate) => {
    const content = document.createElement('div');

    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.id = 'hiddenInput';
    hiddenInput.value = idPlate;
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
            const idPlate = document.getElementById('hiddenInput').value;
            const uri = `${URI_COMPLETE}/${idPlate}`;
            const data = { description };
            PETICION_HTTP(uri, 'PUT', data);
        }
    });
};

export {
    INPUT_ALERT,
    ERROR_ALERT
};
