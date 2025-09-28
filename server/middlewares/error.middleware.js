export const errorMiddleware = (err, req, res, next) => {
    err.message ||= "Internal Server Error";
    err.statusCode ||= 500;

    return res
        .status(err.statusCode)
        .json({ success: false, message: err.message, stack: err.stack, err });
};

export const TryCatch = (passedFun) => async (req, res, next) => {
    try {
        await passedFun(req, res, next);
    } catch (err) {
        errorMiddleware(err, req, res, next);
    }
};
