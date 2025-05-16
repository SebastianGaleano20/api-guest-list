import HTTP_STATUS from "../helpers/httpStatus.js";
export const ERROR_HANDLERS = {
    sqlError: (res, error) => {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: `Database error: ${error.message}`,
        });
    },
    genericError: (res, error) => {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: `Internal Server Error: ${error.message}`,
        });
    },
    defaultError: (res, error) => {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message,
        });
    },
};
