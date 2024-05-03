import {
    COMPLETE_URI
} from './config.js';

import {
    HTTP_REQUEST
} from './request.js';

const DELETE_DISH = () => {
    document.addEventListener("click", async event => {
        if (event.target.matches("[id^='btnDelete']")) {
            const dishId = event.target.id.split('-')[1];
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });
            if (result.isConfirmed) {
                const uri = `${COMPLETE_URI}/${dishId}`;
                console.log(uri);
                HTTP_REQUEST(uri, 'DELETE');
                // Reload the dish list after deletion
            }
        }
    });
};

export {
    DELETE_DISH
};
