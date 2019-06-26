import Controller from '@ctsy/controller/dist/controller'
/**
  * 聊天成员 ImMem
  * MID MID 大数值自增(bigint)
  * GID GID 大整数(bigint)
  * 成员ID UID 大整数(bigint)
  * 角色 Rule 状态值(tinyint(1))
  * 加入时间 CTime 时间戳(timestamp)
*/
export default class ImMem extends Controller{
  get _KeywordTable(){
    return 'ImMem'
  }
 
  get _KeywordFields(){
    return []
  }
  
  
  
  
  async del(){throw new Error('禁止操作')}
  async delW(){throw new Error('禁止操作')}
  
}