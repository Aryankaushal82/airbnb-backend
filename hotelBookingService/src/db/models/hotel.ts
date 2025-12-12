import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import sequelize from "./sequelize";

class Hotel extends Model<InferAttributes<Hotel>,InferCreationAttributes<Hotel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare address: string;
    declare location: string;
    declare rating?: number;
    declare ratingCount?: number;
    declare deletedAt: CreationOptional<Date | null>;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Hotel.init({
    id:{
        type: 'INTEGER',
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: 'STRING(255)',
        allowNull: false,
    },
    address:{
        type: 'STRING(255)',
        allowNull: false,
    },
    location:{ 
        type: 'STRING(255)',
        allowNull: false,
    },
    rating:{
        type: 'DECIMAL(3,2)',
        allowNull: true, 
    },
    ratingCount:{
        type: 'INTEGER',
        allowNull: true,
    },
    deletedAt:{
        type: 'DATE',
        allowNull: true,
        defaultValue:null,
    },
    createdAt:{
        type: 'DATE',
        defaultValue:new Date(),
    },
    updatedAt:{
        type: 'DATE',
        defaultValue:new Date(),
    }
},{
    tableName: 'hotels',
    sequelize:sequelize,
    timestamps:true, //this will add createdAt and updatedAt fields automatically
    underscored:true, //this will convert camelCase to snake_case in db (e.g. createdAt to created_at)
})  //this init will tell that which model maps with which table and which property is mapped to which attribute in the table

export default Hotel;