import Controller from '@ctsy/controller/dist/controller'
/**
  * 聊天 Log
  * UID UID 大数值自增(bigint)
  * 组ID GID 大整数(bigint)
  * 发送人 CUID 大整数(bigint)
  * 发送时间 CTime 时间戳(timestamp)
  * 类型 Type 序号(bigint)
  * 内容 V 字符250(char(250))
*/
export default class Log extends Controller{
  get _KeywordTable(){
    return 'Log'
  }
 
  get _KeywordFields(){
    return []
  }
  
  
  
  
  async del(){throw new Error('禁止操作')}
  async delW(){throw new Error('禁止操作')}
  
}