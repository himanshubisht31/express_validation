const express = require('express')

const router = express.Router()

const User = require('../model/userModel')

const { body, validationResult } = require('express-validator');




router.post('/',

    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').notEmpty().isEmail().withMessage('Must be a proper email'),
    body('pincode').notEmpty().isLength({ min: 6, max: 6 }).withMessage('Length must be equal to 6'),
    body('age').notEmpty().custom(value => {
        if (value < 1 || value > 100) throw new Error('Age must be between 1 to 100')
        return true
    }),

    body('gender').notEmpty().custom(value => {
        if (value !== 'Male' && value !==  'Female' && value !== 'Others') throw new Error('Give correct gender')
        return true
    }),

     async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = await User.create(req.body)

        return res.status(200).send({ user })

    }


)

router.get('/', async (req, res) => {

    try {

        const user = await User.find().lean().exec()

        return res.status(200).send({ user })

    } catch (error) {
        console.log(error.message);

    }


})

module.exports = router