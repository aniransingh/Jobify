import { Router } from 'express';
const router = Router();

import {
    getAllJobs,
    createJob,
    updateJob,
    deleteJob,
    showStats,
} from '../controllers/jobsController.js';

router.route('/').post(createJob).get(getAllJobs);
router.route('/:id').delete(deleteJob).patch(updateJob);
router.route('/stats').get(showStats);

export default router;
