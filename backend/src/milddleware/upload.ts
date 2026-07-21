import multer from "multer";
import path from "path";
import fs from "fs";

const pastaUploads = path.join(__dirname, "../../uploads");

if (!fs.existsSync(pastaUploads)) {
  fs.mkdirSync(pastaUploads, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, pastaUploads);
  },

  filename: (req, file, callback) => {
    const nome = Date.now() + "-" + file.originalname;
    callback(null, nome);
  },
});

const upload = multer({ storage });

export default upload;
