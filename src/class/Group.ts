/**
  * 聊天组 Group
  * 组号 GID 大数值自增(bigint)
  * 组类型 Type 状态值(tinyint(1))
  * 管理员 AUID 大整数(bigint)
  * 创建人 CUID 大整数(bigint)
  * 创建时间 CTime 时间戳(timestamp)
  * 状态 Status 状态值(tinyint(1))
*/
export default class Group{
        
    public GID:number=0;    
    public Type:number=0;    
    public AUID:number=0;    
    public CUID:number=0;    
    public CTime:Date=new Date;    
    public Status:number=1;
}