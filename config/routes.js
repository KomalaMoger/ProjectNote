const express = require('express')
const router = express.Router()

const UsersController =require('../api/controllers/UsersController')
const categoriesController=require('../api/controllers/categoriesController')
const notesController = require('../api/controllers/notesContoller')

const {authenticateUser}=require('../api/middleware/authenication')

router.post('/users/register',UsersController.register)
router.post('/users/login',UsersController.login)
router.get('/users/account',authenticateUser,UsersController.account)
router.delete('/users/logout',authenticateUser,UsersController.logout)

router.get('/categories',categoriesController.list)
router.get('/categories/:id',categoriesController.show)
router.post('/categories',categoriesController.create)
router.put('/categories/:id',categoriesController.update)
router.delete('/categories/:id',categoriesController.destroy)

router.get('/notes', authenticateUser, notesController.list)
router.get('/notes/:id', authenticateUser, notesController.show)
router.post('/notes', authenticateUser, notesController.create)
router.put('/notes/:id', authenticateUser, notesController.update)
router.delete('/notes/:id', authenticateUser, notesController.destroy)

module.exports = router