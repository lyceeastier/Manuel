$(document).ready(function(){
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
			
			  
				
				

				
	//---------------------------------------------
	
		$.ajax({
			url : 'bddCheckPoint.php', // Url de la page 
			type : 'post',			// type de retours
			
			
		}).done(function(data){
			
			data1 = data
				
				var splitdata1 = data1.split("||");
				
				
				console.log("Nombre de column dans la table: " + (splitdata1.length-1));
				
					
				
				for(var i = 0; i < (splitdata1.length-1); i++){
				nbligne = (i+1);
					console.log("--------------------------------");
					
					console.log("----[BDD Id] = " + (i+1));
					console.log("--------------------------------");
					
					var splitdata2 = splitdata1[i].split('|');	
					//console.log( (splitdata2.length-2) );
					//for(var y = 0; y < (splitdata2.length-2) ;y++)
					//{					
					
						console.log("[latitude:] " + splitdata2[0]);
						longitude = splitdata2[0];
						console.log("[longitude:] " + splitdata2[1]);
						latitude = splitdata2[1];
						console.log("[nomLigne:] " + splitdata2[2]);
						nomLigne = splitdata2[2];
						console.log("------------[END]---------------");
						
						if(i == (splitdata1.length-1)-1)
						{
							dernierPassage = 1;
							console.log("dernier passage");
						}
							
						
						// on creé la première ligne
					//////////////////////////////////////////////////////////
				
						 //nouvelleligne(nbligne,longitude, latitude, nomLigne);
						
										
						//creerCheckPoint(longitude, latitude);
						//creerNomArrets(nomLigne, longitude, latitude);
						ajouterFlag(longitude, latitude, nbligne, dernierPassage);
						
						
				}
				
			
				
					// on met l'entete (id,long,lat)
					//ligneDeTete();
					

			
			
			});
					
	function ligneDeTete(){
	
	var table = document.createElementNS(svgns,'table');
	table.innerHTML = "<tr><td>ID</td><td>Nom Ligne</td><td>Latitude</td><td>Longitude</td></tr>";
	document.getElementById("tableau").appendChild(table);
			
					
	}
	
	function creerCheckPoint(longitude,latitude)
	{
		
			/////// Création CheckPoint /////////////////////////////
						var rect = document.createElementNS(svgns, 'rect');
						rect.setAttributeNS(null, 'x', longitude);
						rect.setAttributeNS(null, 'y', latitude);
						rect.setAttributeNS(null, 'height', '10');
						rect.setAttributeNS(null, 'width', '10');
						rect.setAttributeNS(null, 'fill', 'red');
						rect.setAttributeNS(null, 'onmousemove', "ShowTooltip(evt)");
						rect.setAttributeNS(null, 'onmouseout', 'HideTooltip()');
						document.getElementById('map-matrix').appendChild(rect);
		/////////////////////////////////////////////////////////////
		
		
	}
	
	function creerNomArrets(nomLigne, longitude, latitude)
	{
		
						var text = document.createElementNS(svgns, 'text');
						text.setAttributeNS(null, 'x', longitude);
						text.setAttributeNS(null, 'y', latitude);
						text.setAttributeNS(null, 'class', 'tooltip');
						text.setAttributeNS(null, 'id', 'tooltip');
						text.setAttributeNS(null, 'fill', 'red');
						text.setAttributeNS(null, 'font-size', '15');
						//text.setAttributeNS(null, 'alignment-baseline', 'middle');
						//text.setAttributeNS(null, 'text-anchor', 'middle');
						text.setAttributeNS(null, 'font-weight', 'bold');
						text.textContent = nomLigne;
						document.getElementById('map-matrix').appendChild(text);
		
	}
	
	
	function nouvelleligne(nbligne, longitude, latitude, nomLigne){
		
			var table = document.createElementNS(svgns,'table');
			table.innerHTML = "<tr><td>"+ nbligne +"</td><td>"+ nomLigne +"</td><td>"+ latitude +"</td><td>"+ longitude +"</td></tr>";
			document.getElementById("tableau").appendChild(table);
			
					
	}
	
	
			


	function ajouterligne(ligne){

		// Si c'est la derière ligne	
		if(ligne.attr('name') == nbligne){
		
			// On insert la nouvelle ligne
			nbligne ++;
			var nouvelle_ligne = nouvelleligne(nbligne);
			$(nouvelle_ligne).insertAfter(ligne);
		
			// on change la variable nbligne et on l'affiche 
			$("#result").html("nb ligne = " + nbligne);
		}
	}
	
	function ajouterFlag(longitude, latitude, nbligne, dernierPassage)
	{
		//console.log("valeur de dernierPassageDansAddFlag: " + dernierPassage);
		
		var flag = document.createElementNS(svgns, 'image');
		flag.setAttributeNS(null, 'x', longitude-19);
		flag.setAttributeNS(null, 'y', latitude-43);
		flag.setAttributeNS(null, 'height', '50');
		flag.setAttributeNS(null, 'width', '50');
		flag.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', 'checkPoints/checkPoint_'+nbligne+'.png');
		document.getElementById('map-matrix').appendChild(flag);
		if(dernierPassage == 1)
		{
			//console.log("valeur de dernierPassageDansIF: " + dernierPassage);
			flag.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', 'checkPoints/checkPoint_Final.png');
			document.getElementById('map-matrix').appendChild(flag);
		}
						
						
						
						
		
	}
		
		


// -------fin du du ready
});

