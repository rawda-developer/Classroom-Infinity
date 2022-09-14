import express from 'express';
import { hasAuthorization, requireLogin } from '../controllers/auth.controller';
import {
  createCourse,
  courseByID,
  isInstructor,
} from '../controllers/course.controller';
import { userByID } from '../controllers/user.controller';
const router = express.Router();

router
  .route('/api/users/:userId/courses')
  .post(requireLogin, hasAuthorization, isInstructor, createCourse);
router.param('userId', userByID);
router.param('courseId', courseByID);
export default router;