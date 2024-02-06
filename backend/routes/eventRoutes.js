import express from 'express'
import { getEventById, getEvents } from '../controllers/eventController.js'

const router = express.Router()

// @desc    Fetch all products
// @route   GET /api/products/
// @access  public
router.get('/', getEvents)

// @desc    Fetch single product by id
// @route   GET /api/products/:id
// @access  public
router.get('/:id', getEventById)

export default router