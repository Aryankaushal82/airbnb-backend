
import express from 'express';
const hotelRouter = express.Router();
import { createHotelhandler, getAllHotelsHandler, getHotelByIdHandler, updateHotelHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';

hotelRouter.post('/create',validateRequestBody(hotelSchema),createHotelhandler)
hotelRouter.get('/:id',getHotelByIdHandler)
hotelRouter.get('/all',getAllHotelsHandler)
hotelRouter.put('/update/:id',updateHotelHandler)
hotelRouter.delete('/delete/:id',updateHotelHandler)

export default hotelRouter;