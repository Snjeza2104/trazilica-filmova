var link = "";
function posaljiOdgovor(event){
	link="omdbapi.com/?apikey=e732ee6b&s=";
	link+='"'+document.getElementById("name").value+'"';
	console.log(document.getElementById("name").value);
	for(var i=0; i<link.length; i++){
	if (link[i]==" "){
	link=link.replace(" ", "%20");
	}
	if (link[i]=="'"){
	link=link.replace("'", "%27");
	}
	}
	link="http://"+link;
	document.getElementById("content2").innerHTML="Adresa je <a target='_blank' href="+link+"> ovdje. </a>";
	console.log(link);
	return link;
	};

function movies(data){
	list = document.getElementById('filmovi');
	for(var i of data.Search)
	{
		if(i.Poster!="N/A"){
    	list.innerHTML += "<li><b>"+i.Title+'</b><br/>Poster<br/><img src=' + i.Poster +'></img></li>';
		}
		else{
		list.innerHTML += "<li><b>"+i.Title+"</b></li>";
		}
		
	}
}
