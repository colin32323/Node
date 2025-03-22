import multer from "multer";

class Uploader {
    constructor(saveLocation, fileType) {
        this.saveLocation = saveLocation || "./uploads/untagged";
        this.allowedFileTypes = [
            "image/jpeg",
            "image/png",
            "audio/mpeg",
            "video/mp4",
        ];
        this.maxFileSize = 10 * 1024 * 1024;
    }

    storageConfig() {
        return multer.diskStorage({
            destination: (req, file, cb) => {},
            filename: (req, file, cb) => {},
        });
    }

    fileFilterConfig(req, file, cb) {
        return cb(null, true);
    }

    config() {
        return multer({
            limits: { fileSize: this.maxFileSize },
            storage: this.storageConfig(),
            fileFilter: this.fileFilterConfig.bind(this),
        });
    }
}
