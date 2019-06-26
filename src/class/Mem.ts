/**
  * 聊天成员 Mem
  * MID MID 大数值自增(bigint)
  * GID GID 大整数(bigint)
  * 成员ID UID 大整数(bigint)
  * 角色 Rule 状态值(tinyint(1))
  * 加入时间 CTime 时间戳(timestamp)
*/
export default class Mem{
        
    public MID:number=0;    
    public GID:number=0;    
    public UID:number=0;    
    public Rule:number=0;    
    public CTime:Date=new Date;
}