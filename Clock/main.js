function time(){
    var now= new Date();
    document.getElementById("time").innerHTML = now;
 

        var a=document.getElementById("clock");
        var ctx=a.getContext("2d");
       
        ctx.beginPath();
        ctx.clearRect(0,0,600,400);
        var x=300;
        var y=200;
        var r=150;
        ctx.arc(x,y,r,0,2*Math.PI);
        var second=now.getSeconds();
        var minute=now.getMinutes();
        var hour=now.getHours()%12;
       //draw
        
        ctx.moveTo(x,y);
        ctx.lineTo(Math.cos((Math.PI/30)*second+3*Math.PI/2)*100+x,Math.sin((Math.PI/30)*second+3*Math.PI/2)*100+y);
        ctx.stroke();
        ctx.moveTo(x,y);
        ctx.lineTo(Math.cos((Math.PI/30)*minute+3*Math.PI/2)*120+x,Math.sin((Math.PI/30)*minute+3*Math.PI/2)*120+y);
        ctx.stroke();
        ctx.strokeStyle = 'orange';
        ctx.moveTo(x,y);
        ctx.lineTo(Math.cos((2*Math.PI/12)*hour+3*Math.PI/2)*80+x,Math.sin((2*Math.PI/12)*hour+3*Math.PI/2)*80+y);
        ctx.stroke();
        //draw a clock face ? :D 
        for(let i=0;i<60;i++){
            if(i%5==0){
                ctx.moveTo(Math.cos((Math.PI/30)*i)*130+x,Math.sin((Math.PI/30)*i)*130+y);
                ctx.lineTo(Math.cos((Math.PI/30)*i)*r+x,Math.sin((Math.PI/30)*i)*r+y);
                ctx.stroke();
            }else{
                ctx.moveTo(Math.cos((Math.PI/30)*i)*140+x,Math.sin((Math.PI/30)*i)*140+y);
                ctx.lineTo(Math.cos((Math.PI/30)*i)*r+x,Math.sin((Math.PI/30)*i)*r+y);
                ctx.stroke();
            }
        }
        
     //   ctx.stroke(); 
    


}

setInterval(time,100);
