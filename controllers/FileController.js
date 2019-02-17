const async = require("async");
const fs = require("fs");
const mkdirp = require("mkdirp");

const Files = require("../models/File");

const logError = require("debug")("error");

const UPLOAD_DIR = "uploads";

function createUserDirectory(userId, callbackFn) {
  let directoryPath = UPLOAD_DIR + "/" + userId;
  mkdirp(directoryPath, err => {
    if (err) {
      return callbackFn(err);
    }
    return callbackFn(null, directoryPath);
  });
}

function uploadFiles(req, res) {
  let files = req.files;
  if (!files || !files.length) {
    return res.status(400).json({
      message: "Please check, No files were found",
      status: files,
      code: 400
    });
  }
  else{
    createUserDirectory((err, directoryPath) => {
        if (err) {
            return callback(err);
        }
        let createdFiles = [];
        console.log("in files",files)
        async.each(
            files,
            (file, cb) => {
                console.log(files);
            let random = Math.floor(Math.random() * 100) + 1000;
            let filePath = directoryPath + "/" + random + "_" + file.originalname;
            fs.writeFile(filePath, file.buffer, err => {
                if (err) {
                logError(err);
                return cb();
                } else {
                    console.log("in create");
                Files.create(
                    {
                    fileName: file.originalname,
                    filePath: filePath,
                    module: req.body.module
                    },
                    (err, createdFile) => {
                    if (err) {
                        logError(err);
                        return res.status(400).json({
                        message: "err",
                        status: err,
                        code: 400
                        });
                    } else {
                        return res.status(201).json({
                        data: new_post,
                        message: "File uploaded",
                        status: "OK",
                        code: 200
                        });
                    }
                    }
                );
                }
            });
            },
            () => {
            return callback(null, createdFiles);
            }
        );
        });
  }
}

module.exports = {
  uploadFiles,
  createUserDirectory
};
