var size,num_array=[],i,j,array=[];
size=parseInt(prompt("Enter Size Of The Array"));
for(i=0;i<size;i++){
num_array.push(parseInt(prompt("Enter "+(i+1)+" Number")));
}
for(i=0;i<size;i++)
{
   j=array.indexOf(num_array[i]);
   if(j>=0)
   {
	   document.write(num_array[i]+" is duplicate<br>");
	  
	}
	else
	array.push(num_array[i]);
}
