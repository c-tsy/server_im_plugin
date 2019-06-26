import Relation, { R } from "@ctsy/relation";
/**
  * 聊天 Log
  * UID UID 大数值自增(bigint)
  * 组ID GID 大整数(bigint)
  * 发送人 CUID 大整数(bigint)
  * 发送时间 CTime 时间戳(timestamp)
  * 类型 Type 序号(bigint)
  * 内容 V 字符250(char(250))
*/
export default class Log extends Relation{    
    constructor(ctx,table){
        super(ctx,table)
    }
}
