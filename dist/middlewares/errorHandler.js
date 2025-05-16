import { ERROR_HANDLERS } from "../utils/errorHandlerObject.js";
const errorHandler = (error, _req, res, _next) => {
    console.error("Error handler:", error);
    const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError;
    handler(res, error);
};
export default errorHandler;
