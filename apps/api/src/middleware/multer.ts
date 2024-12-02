import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, filename: string) => void;

export const uploader = (
  type: "memoryStorage" | "diskStorage" = "memoryStorage",
  filePrefix: string,
  folderName?: string) => {
  const defaultDir = path.join(__dirname, '../../public');

  const storage =
    type == "memoryStorage" ? multer.memoryStorage() :
      multer.diskStorage({
        destination: (
          req: Request,
          file: Express.Multer.File,
          cb: DestinationCallback
        ) => {
          const destination = folderName ? path.join(defaultDir, folderName) : defaultDir;
          cb(null, destination);
        },
        filename: (
          req: Request,
          file: Express.Multer.File,
          cb: FilenameCallback
        ) => {
          const originalNameParts = file.originalname.split('.');
          const fileExtension = originalNameParts[originalNameParts.length - 1];
          const newFileName = `${filePrefix}${Date.now()}.${fileExtension}`;
          cb(null, newFileName);
        }
      });

  const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedTypes.test(file.mimetype);

    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error('Only .jpeg, .jpg, .png, and .gif files are allowed!'));
    }
  };

  return multer({
    storage,
    limits: { fileSize: 1 * 1024 * 1024 }, // Limit file size to 1MB
    fileFilter
  });
};
