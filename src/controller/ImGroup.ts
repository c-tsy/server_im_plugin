import Controller from '@ctsy/controller/dist/controller'
/**
  * 聊天组 ImGroup
  * 组号 GID 大数值自增(bigint)
  * 组类型 Type 状态值(tinyint(1))
  * 管理员 AUID 大整数(bigint)
  * 创建人 CUID 大整数(bigint)
  * 创建时间 CTime 时间戳(timestamp)
  * 状态 Status 状态值(tinyint(1))
*/
export default class ImGroup extends Controller{
  get _KeywordTable(){
    return 'ImGroup'
  }
 
  get _KeywordFields(){
    return []
  }
  
  
  
  
  async del(){throw new Error('禁止操作')}
  async delW(){throw new Error('禁止操作')}
  
}