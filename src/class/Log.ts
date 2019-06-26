/**
  * 聊天 Log
  * UID UID 大数值自增(bigint)
  * 组ID GID 大整数(bigint)
  * 发送人 CUID 大整数(bigint)
  * 发送时间 CTime 时间戳(timestamp)
  * 类型 Type 序号(bigint)
  * 内容 V 字符250(char(250))
*/
export default class Log{
        
    public UID:number=0;    
    public GID:number=0;    
    public CUID:number=0;    
    public CTime:Date=new Date;    
    public Type:number=0;    
    public V:string="";
}