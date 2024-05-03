const HTTP_REQUEST = async (uri, method, data = null) => {
    const OPTIONS = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    if (data) {
        OPTIONS.body = JSON.stringify(data);
    }

    try {
        const RESPONSE = await fetch(uri, OPTIONS);
        if (!RESPONSE.ok) {
            throw new Error(`HTTP error! status: ${RESPONSE.status}`);
        } else {
            return await RESPONSE.json();
        }
    } catch (error) {
        console.log(error);
    }
};

export {
    HTTP_REQUEST
};
