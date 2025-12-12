import { createHotelDto } from "../dto/hotel.dto";
import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../repositories/hotel.repository";
import { BadRequestError } from "../utils/errors/app.error";


export const createHotelService = async(hotelData:createHotelDto)=>{
    if(!hotelData.name || !hotelData.address || !hotelData.location){
        throw new BadRequestError('Name, address and location are required to create a hotel');
    }
    if(hotelData.rating && (hotelData.rating < 0 || hotelData.rating > 5)){
        throw new BadRequestError('Rating must be between 0 and 5');
    }
    const hotel = await createHotel(hotelData);
    return hotel;
}

export const getHotelByIdService = async(hotelId:number)=>{
    if(!hotelId){
        throw new BadRequestError('Hotel ID is required');
    }

    const hotel = await getHotelById(hotelId);
    return hotel;
}

export const getAllHotelsService = async()=>{
    const hotels = await getAllHotels();
    return hotels;
}

export const updateHotelService = async(hotelId:number,hotelData:Partial<createHotelDto>)=>{
    if(!hotelId){
        throw new BadRequestError('Hotel ID is required');
    }
    const hotel = await updateHotel(hotelId,hotelData);
    return hotel;
}

export const delteHotelService = async(hotelId:number)=>{
    if(!hotelId){
        throw new BadRequestError('Hotel ID is required');
    }
    await deleteHotel(hotelId);
    return;
}