// import { NextFunction, Request, Response } from 'express';
// import { body, validationResult } from 'express-validator';

// export const validateRegister = [
//   body('firstname').notEmpty().withMessage('firstname is required'),
//   body('lastname').notEmpty().withMessage('lastname is required'),
//   body('email').notEmpty().withMessage('email is required')
//     .isEmail().withMessage('invalid email format'),
//   body('password').notEmpty().withMessage('password is required'),

//   (req: Request, res: Response, next: NextFunction) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).send({
//         status: 'fail',
//         msg: errors.array()
//       })
//     }
//     next()
//   }
// ]
// export const validateCreateEvent = [
//   body('eventName').isEmpty().withMessage('eventName is required'),
//   body('eventDate').isEmpty().withMessage('eventDate is required'),
//   body('eventTime').isEmpty().withMessage('eventTime is required'),
//   body('eventPrice').isEmpty().withMessage('eventPrice is required'),
//   body('eventImg').isEmpty().withMessage('eventImg is required'),
//   body('locationId').isEmpty().withMessage('locationId is required'),
//   body('organizerId').isEmpty().withMessage('organizerId is required'),
//   body('eventCategoryId').isEmpty().withMessage('eventCategoryId is required'),

//   (req: Request, res: Response, next: NextFunction) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).send({
//         status: 'fail',
//         msg: errors.array()
//       })
//     }
//     next()
//   }
// ]