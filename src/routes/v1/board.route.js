import express from 'express';
const router = express.Router();

import BoardController from '*/controllers/board.controller';
import { BoardValidation } from '../../validations/board.validation';

router
   .route('/')
   // .get()
   .post(BoardValidation.createNew, BoardController.createNew);

router.route('/:id').get(BoardController.getABoard);

export const boardRouter = router;
