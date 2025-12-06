import { NextFunction, Request, Response } from "express";
import { createHotelDto } from "../dto/hotel.dto";
import { createHotelService, delteHotelService, getAllHotelsService, getHotelByIdService, updateHotelService } from "../services/hotel.service";
import logger from "../config/logger.config";


export const createHotelhandler = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const hotelData:createHotelDto = req.body;
        const hotel = await createHotelService(hotelData);
        res.status(201).json({
            success:true,
            data:hotel,
            message:'Hotel created successfully'
        })
    } catch (error) {
        logger.error(`Error in createHotelhandler: ${error}`);
        next(error); 
    }
}

export const getHotelByIdHandler = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const hotelId = Number(req.params.id);
        const hotelResponse = await getHotelByIdService(hotelId);
        res.status(200).json({
            success:true,
            data:hotelResponse,
            message:'hotel fetched successfully'
        })
    } catch (error) {
        logger.error(`Error in getHotelByIdHandler: ${error}`);
        next(error);
    }
}

export const getAllHotelsHandler = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const hotels = await getAllHotelsService();
        res.status(200).json({
            success:true,
            data:hotels,
            message:'Hotels fetched successfully'
        })
    } catch (error) {
        logger.error(`Error in getAllHotelsHandler: ${error}`);
        next(error);
    }
}

export const updateHotelHandler = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const hotelId = Number(req.params.id);
        const hotelData:Partial<createHotelDto> = req.body;
        const hotel = await updateHotelService(hotelId,hotelData);
        res.status(200).json({
            success:true,
            data:hotel,
            message:'Hotel updated successfully'
        })
    } catch (error) {
        logger.error(`Error in updateHotelHandler: ${error}`);
        next(error);
    }
}

export const delteHotelHandler = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const hotelId = Number(req.params.id);
        await delteHotelService(hotelId);
        res.status(200).json({
            success:true,
            message:'Hotel deleted successfully'
        })
    } catch (error) {
        logger.error(`Error in delteHotelHandler: ${error}`);
        next(error);
    }
}