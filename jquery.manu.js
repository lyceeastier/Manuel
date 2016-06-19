$(document).ready(function(){
			
			var idNextPoint = 1;
			var idReference = idNextPoint;
			var data1;
			var tableau;
			var nbligne = 0;
			var longitude;
			var latitude;
			var nouvelle_ligne;
			var entete;
			var timer
			var svgns = "http://www.w3.org/2000/svg";
			var dernierPassage = 0;
		
				$(".logoBoule").click('click', function(){
					$(".logoBoule").css('top','-40px');
					$(".header2").removeClass('active');
					$(".header2").addClass('active');
					
					$(".logoBoule").css('visibility','hidden');

				});
				$(".footer2").click('click', function(){
					
					$("#.footer1").attr('class','footer1 active');
					$("#.footer2").attr('class','footer2 passive');
				});			
				
	//---------------------------------------------
	setInterval(function(){
		
	
		$.ajax({
			url : 'connect.php?lastid='+idNextPoint+'', // Url de la page 
			type : 'GET',			// type de retours
			
			
		}).done(function(data){
			
			data1 = data
				// data contient les informations qui proviennent de connect.php (longitude et latitude de la BDD)
				
				// Le split sur "||" permet de savoir que l'ont change d'id
				var splitdata1 = data1.split("||");
			
				// splitdata1.length-1 
				nbPointsLus = (splitdata1.length)-1;
				
				for(var i = 0; i < nbPointsLus; i++)
				{																														
					var splitdata2 = splitdata1[i].split('|');	
					
					idBdd = splitdata2[0];
					

					console.log("Nombre de column lues dans la table: " + (nbPointsLus));										
					console.log("--------------------------------");					
					console.log("--------[BDD Id: "+(idBdd) +"]--------");
					console.log("--------------------------------");	
					
						// Latitude
						console.log("[latitude en Pixel]: " + splitdata2[1]);
						longitude = splitdata2[1];					
						//Longitude
						console.log("[longitude en Pixel]: " + splitdata2[2]);
						latitude = splitdata2[2];
						
						modifierPolyline(longitude, latitude);
						addBusLogo(longitude, latitude);
						console.log("------------[END]---------------");						
						if(i == (splitdata1.length-1)-1)
						{
							dernierPassage = 1;
							console.log("Wait 5 Sec for Next Values");
						}														
				}
					if(nbPointsLus != 0)
					{
						//marche normal.
						//idNextPoint = idNextPoint+nbPointsLus;
						//Pour test
						idNextPoint ++;
					}else{
						console.log('je suis sortie');
					}
					
			});
			
			},1000);
					
	
						
						
		function modifierPolyline(longitude, latitude)
		{
			var polyline =document.getElementById('myTraj');
	
			var points = polyline.getAttribute('points');
			// nouvelle valeur = ajoute les anciens points + 500,70
			var attributes = points + ""+(longitude)+","+(latitude)+" ";
			//console.log(attributes);
			//ajouter la nouvelle valeur
			var valuesfinal = $("#myTraj").attr("points",attributes);
			// affiche la nouvelle valeur de points
			console.log("Valeurs Final = " + $("#myTraj").attr("points"));	
				
		}				
		
function addBusLogo(longitude, latitude)
{
		var image = document.getElementById('myLogoBus');
		
		
		image.setAttributeNS(null, 'x', longitude-19);
		image.setAttributeNS(null, 'y', latitude-43);
		image.setAttributeNS(null, 'height', '50');
		image.setAttributeNS(null, 'width', '50');
		
		
}		
		
	
		
		


// -------fin du du ready
});

