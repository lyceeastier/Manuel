

function reagirLoadPage ()
{	
	//récupérer la balise polyline
	var x = document.getElementById("myrect");
	//ou polyline
	//récupérer les valeurs des points de polyline
	var y = $("#myrect").attr("points");
	//ou points
	
	
	// Affichage
	console.log("x = " + x);
	console.log("y = " + y);
	
	
	
	
	
	
	
}

function Clickfunction(){
	
	
	var polyline =document.getElementById('myrect');
	var points = polyline.getAttribute('points');
	// nouvelle valeur = ajoute les anciens points + 500,70
	var attributes = points + "0,0 ";
	//console.log(attributes);
	//ajouter la nouvelle valeur
	var valuesfinal = $("#myrect").attr("points",attributes);
	// affiche la nouvelle valeur de points
	console.log("Valeurs Final = " + $("#myrect").attr("points"));
}


window.addEventListener('load', reagirLoadPage, false);
window.addEventListener('click', Clickfunction, false);