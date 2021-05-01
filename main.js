snames=[];
var d_array=[];
function submit()
{
   
    for(var j=1;j<=4;j++)
    {
        var n=document.getElementById("s"+j).value;
        snames.push(n);
        console.log(snames);
    }
    console.log(snames);
   var len=snames.length;
   console.log(len);
   for(var d=0;d<len;d++)
   {
     d_array.push("<h4> NAME - "+snames[d]+" </h4>");
     console.log(d_array);
   }
   console.log(d_array);
    document.getElementById('display1').innerHTML=d_array;
    var rc1=d_array.join(" ");
    document.getElementById('display2').innerHTML=rc1;






    document.getElementById('sub').style.display='none';
    document.getElementById('sor').style.display='inline';
}
function sort()
{
   d_array.sort();
    console.log(d_array);
    document.getElementById('display2').innerHTML=d_array;
}