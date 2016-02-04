var library=[
	
	{
		author: 'Bill Gates',
		title: 'The Road Ahead',
		readingStatus: true
	},
	{
		author: 'Steve Jobs',
		title: 'Walter Isaacson',
		readingStatus: true
	},
	{
		author: 'Suzanne Collins',
		title: 'Mockingjay: The Final Book of The Hunger Games',
		readingStatus: false
	}
	];

for(var i=0;i<3;i++)
{
 document.write("<br>Author: "+library[i]['author']+"<br>Title: "+library[i]['title']+"<br>Reading Status: "+library[i]['readingStatus']+"<br>------------------------------");
}
