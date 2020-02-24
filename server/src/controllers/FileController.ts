// require module
import { Request, Response } from 'express';
import logger from '../logs/Logger';

// create class
class FileController {
  constructor() {}

  // handle upload file
  public uploadFile(request: Request, response: Response): void {
    try {
      response.status(200).json(logger.logSuccess(request.file.filename));
    } catch (e) {
      response.status(405).json(logger.logError(e));
    }
  }
}

// create instance
const fileController = new FileController();

// export instance
export default fileController;
