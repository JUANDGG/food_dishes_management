const URI = {
    protocol: "http://",
    hostName: "localhost",
    port: "8080",
    path: "/api/plato"
};

const URI_LIST_ALL = {
    ...URI,
    path: URI.path + "/all"
};

const COMPLETE_URI = `${URI.protocol}${URI.hostName}:${URI.port}${URI.path}`;
const LIST_URI = `${URI_LIST_ALL.protocol}${URI_LIST_ALL.hostName}:${URI_LIST_ALL.port}${URI_LIST_ALL.path}`;

export {
    COMPLETE_URI,
    LIST_URI
};
