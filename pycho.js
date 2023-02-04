var x=0,n=0,z=0,v=0,zz=0,zzz=0,zzzz=0,zzzzz=0;

function incre1(z)
{   
 x=x++;  
n=1;
for(v=1;v<=5;v++)
{
 if(v==n)
 {
    
 }
 else{
    (z.concat(v.toString())).style.display='none';
 }
}
 }

function incre2(zz)
{
    x=x+2;
    n=2;
    for(v=1;v<=5;v++)
    {
        if(v==n)
        {
           
        }
        else{
           (zz.concat(v.toString())).style.display='none';
        }
       }
    
}

function incre3(zzz)
{ 
    x=x+3; 
    n=3;
for(v=1;v<=5;v++)
{
 if(v==n)
 {
    
 }
 else{
    (zzz.concat(v.toString())).style.display='none';
 }
}
}
function incre4(zzzz)
{ 
    x=x+4; 
    n=4;
for(v=1;v<=5;v++)
{
 if(v==n)
 {
    
 }
 else{
    (zzzz.concat(v.toString())).style.display='none';
 }
}
}
function incre5(zzzzz)
{ 
    x=x+5; 
    n=5;
for(v=1;v<=5;v++)
{
 if(v==n)
 {
    
 }
 else{
    (zzzzz.concat(v.toString())).style.display='none';
 }
}
}
function result()
{
document.getElementById("res").innerHTML=x;
}

