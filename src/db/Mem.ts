import { DbDataType } from "@ctsy/model";
/**
  * 聊天成员 Mem
  * MID MID 大数值自增(bigint)
  * GID GID 大整数(bigint)
  * 成员ID UID 大整数(bigint)
  * 角色 Rule 状态值(tinyint(1))
  * 加入时间 CTime 时间戳(timestamp)
*/
export default {    
    MID:{
        type:DbDataType.bigint,
        primaryKey:true,
        autoIncrement:true,
        defaultValue:0,
        allowNull:false
    },    
    GID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    UID:{
        type:DbDataType.bigint,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    Rule:{
        type:DbDataType.tinyint(1),
        primaryKey:false,
        autoIncrement:false,
        defaultValue:0,
        allowNull:false
    },    
    CTime:{
        type:DbDataType.timestamp,
        primaryKey:false,
        autoIncrement:false,
        defaultValue:new Date,
        allowNull:false
    },
}