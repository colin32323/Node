import multer from "multer";

class Uploader {
    constructor(saveLocation, uploadLocation) {
        this.uploadLocation = uploadLocation;
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
            destination: (req, file, cb) => {
                cb(null, this.uploadLocation);
            },
            filename: (req, file, cb) => {
                const fileName = `${Date.now()}-${file.originalname}`;
                cb(null, fileName);
            },
        });
    }

    fileFilterConfig(req, file, cb) {
        if (this.allowedFileTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(
                new Error(
                    `Invalid file type. Allowed file types are : ${this.allowedFileTypes.join(
                        ", "
                    )}`
                ),
                false
            );
        }
    }

    config() {
        return multer({
            limits: { fileSize: this.maxFileSize },
            storage: this.storageConfig(),
            fileFilter: this.fileFilterConfig.bind(this),
        });
    }

    singleMediaUpload() {
        return this.config().single("media");
    }

    multiMediaUpload() {
        return this.config().array("medias", 5);
    }
}

export default Uploader;
