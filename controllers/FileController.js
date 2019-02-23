const async = require("async");
const fs = require("fs");
const mkdirp = require("mkdirp");

const Files = require("../models/file");

const logError = require("debug")("error");

const UPLOAD_DIR = 'uploads/users';

function createUserDirectory(userId, callbackFn) {
	let directoryPath = UPLOAD_DIR + '/' + userId;
	mkdirp(directoryPath, err => {
		if (err) {
			return callbackFn(err);
		}
		return callbackFn(null, directoryPath);
	});
}

function uploadFiles(req, res) {
    let user = {id : 1};
	let files = req.files;
	if (!files || !files.length) {
		return res.status(400).json({
            message: "File not found",
            status: "err",
            code: 400
          });
	}
	createUserDirectory(user.id, (err, directoryPath) => {
		if (err) {
			return res.status(400).json({
                message: err,
                status: "err",
                code: 400
              });
		}
		let createdFiles = [];
		async.each(
			files,
			(file) => {
				let random = Math.floor(Math.random() * 100) + 1000;
				let filePath = directoryPath + '/' + random + '_' + file.originalname;
				fs.writeFile(filePath, file.buffer, err => {
					if (err) {
						logError(err);
					} else {
						Files.create(
							{ fileName: file.originalname, filePath: filePath, module: req.body.module, user: req.user.id },
							(err, createdFile) => {
								if (err) {
									logError(err);
                                    return res.status(400).json({
                                        message: err,
                                        status: "err",
                                        code: 400
                                      });
								} else {
                                    return res.status(201).json({
                                        data: user,
                                        message: "uploaded",
                                        status: "OK",
                                        code: 200
                                      });
								}
							},
						);
					}
				});
			},
			() => {
				return res.status(201).json({
                    data: user,
                    message: "uploaded",
                    status: "OK",
                    code: 200
                  });
			},
		);
	});
}

module.exports = {
	uploadFiles,
	createUserDirectory,
};