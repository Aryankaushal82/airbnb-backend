import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { createHotelDto } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export const createHotel = async(hotelData:createHotelDto) =>{
    try {
        const hotel = await Hotel.create({
            name: hotelData.name,
            address: hotelData.address,
            location: hotelData.location,
            rating: hotelData.rating,
            ratingCount: hotelData.ratingCount,
        });
        logger.info(`Hotel created with id: ${hotel.id}`);
        return hotel;
    } catch (error) {
        logger.error(`Error creating hotel: ${error}`);
        throw new Error('Error creating hotel');
    }
}

export const getHotelById = async(hotelId:number) =>{
    try {
        const hotel = await Hotel.findByPk(hotelId);
        if(!hotel){
            logger.warn(`Hotel not found with id: ${hotelId}`);
           throw new NotFoundError('Hotel not found');
        }
        logger.info(`Hotel retrieved with id: ${hotelId}`);
        return hotel;
    } catch (error) {
        logger.error(`Error retrieving hotel with id ${hotelId}: ${error}`);
        throw new Error('Error retrieving hotel');
    }
}

export const getAllHotels = async()=>{
    try {
        const hotels = await Hotel.findAll();
        return hotels;
        
    } catch (error) {
        logger.error(`Error retrieving all hotels: ${error}`);
        throw new Error('Error retrieving hotels');
    }
}

export const updateHotel = async(hotelId:number,hotelData:Partial<createHotelDto>)=>{
    try {
        const hotel = await Hotel.findByPk(hotelId);
        if(!hotel){
            logger.warn(`Hotel not found with id: ${hotelId}`);
            throw new NotFoundError('Hotel not found');
        }
        await hotel.update(hotelData);
        logger.info(`Hotel updated with id: ${hotelId}`);
        return hotel;
        
    } catch (error) {
        logger.error(`Error updating hotel with id ${hotelId}: ${error}`);
        throw new Error('Error updating hotel');
    }
}

export const deleteHotel = async(hotelId:number) => {
    try {
        const hotel = await Hotel.findByPk(hotelId);
        if(!hotel){
            logger.warn(`Hotel not found with id: ${hotelId}`);
            throw new NotFoundError('Hotel not found');
        }
        await hotel.destroy();
        logger.info(`Hotel deleted with id: ${hotelId}`);
        return;
    } catch (error) {
        logger.error(`Error deleting hotel with id ${hotelId}: ${error}`);
        throw new Error('Error deleting hotel');
    }
}