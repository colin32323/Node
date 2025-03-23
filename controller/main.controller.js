import Uploader from "../utils/uploader.js";

export const uploadSingleFile = async (req, res) => {
    const controller = new Uploader(`.${req.path}`);
    controller.singleMediaUpload()(req, res, (err) => {
        if (err) {
            return res
                .status(400)
                .json({ message: "File upload failed", data: err.message });
        }
        res.status(200).json({
            message: "File uploaded",
            data: req.file,
        });
    });
};

export const uploadMultipleFiles = (req, res) => {
    const controller = new Uploader(`.${req.path}`);
    controller.multiMediaUpload()(req, res, (err) => {
        if (err) {
            return res
                .status(400)
                .json({ message: "File uploads failed", data: err.message });
        }
        res.status(200).json({
            message: "Files uploaded",
            data: req.files,
        });
    });
};
