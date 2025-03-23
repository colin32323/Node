import Uploader from "../uploader";

export const uploadSingleFile = (req, res, next) => {
    const uploader = new Uploader();
    uploader.singleMediaUpload();
    next();
};

export const uploadMultipleFiles = (req, res, next) => {
    const uploader = new Uploader();
    uploader.multiMediaUpload();
    next();
};
