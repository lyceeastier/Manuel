function reagirLoadPage ()
{	

	var monMapMatrix = document.getElementById('map-matrix');
	var transform = monMapMatrix.getAttribute('transform');
	//console.log( "transformScriptHtml5 : " + transform);
	logoCentre();
	window.onresize = logoCentre;
	  // Ne rien faire deja dans JQuery
												// settimeout ( 2 secondes,  miseAjourTrace) || interval
													  // function miseAjourTrace
																//jqueryAjax recup les nouveaux points
																// modif attribut points du polyline
	  // Ne rien faire deja dans JQuery			
										
}
function logoCentre(){
	/////////////////[Trouve la largueur d'écrant et le milieu]/////////////////////////////////
	var point = ".";
	
	if (document.body)
	{
	var larg = (document.body.clientWidth);

	}
	else
	{
	var larg = (window.innerWidth);

	}
	var milieu = (larg/2);
	
	
	//console.log("largueur de mon ecrant: " + larg);
	//console.log("Milieu de mon ecrant: "  + milieu);
	/////////////////////////////////////////////////////////////////	
	var image = document.getElementById('logo');
	var points = image.getAttribute('x');
	//console.log(points);
	var valuesfinal = image.setAttribute('x',(milieu-100));
	//console.log(image.getAttribute('x'));
	
	
}

function pan(dx, dy, string)
{
	var monMapMatrix = document.getElementById('map-matrix');
	var transform = monMapMatrix.getAttribute('transform');
	//console.log( "transformScriptHtml5AV : " + transform);
	/*
	if (transform == "matrix(1 0 0 1 0 0)" && dy == 50)
	{
			
			console.log("case1");
			transMatrix[4] += dx;
			transMatrix[5] += 0;
		
			
		
	}else{
		*/
		transMatrix[4] += dx;
		transMatrix[5] += dy;
	
	
		
	
	newMatrix = "matrix(" +  transMatrix.join(' ') + ")";
	mapMatrix.setAttributeNS(null, "transform", newMatrix);
	
	
	//console.log("valeur de Dx: " + dx);
	//console.log("valeur de Dy: " + dy);
	var monMapMatrixFi = document.getElementById('map-matrix');
	var transformFi = monMapMatrix.getAttribute('transform');
	console.log( "transformScriptHtml5AP : " + transformFi);
}
        
function zoom(scale)
{
	
	for (var i=0; i<transMatrix.length; i++)
	{
		transMatrix[i] *= scale;
	}
	transMatrix[4] += (1-scale)*width/2;
	transMatrix[5] += (1-scale)*height/2;
		
	newMatrix = "matrix(" +  transMatrix.join(' ') + ")";
	mapMatrix.setAttributeNS(null, "transform", newMatrix);
	
	var monMapMatrix = document.getElementById('map-matrix');
	var transform = monMapMatrix.getAttribute('transform');
	console.log( "transformScriptHtml5 : " + transform);
}
	
 function infosBdd()
{		
		document.getElementById("bdd").className = "bdd active"
		
		width = 300;
		height = 200;
		if(window.innerWidth)
		{
				var left = (window.innerWidth-width)/2;
				var top = (window.innerHeight-height)/2;
		}
		else
		{
				var left = (document.body.clientWidth-width)/2;
				var top = (document.body.clientHeight-height)/2;
		}
		var win = window.open('tableau.php','nom_de_ma_popup','menubar=no, scrollbars=no, top='+top+', left='+left+', width='+width+', height='+height+'');

		var timer = setInterval(function() {   
			if(win.closed) {  
				clearInterval(timer);
				document.getElementById("bdd").className = "bdd passive"			
				 
			}  
		}, 1000); 
	}


function fermeture()
{
	//console.log("fenetre fermé ! ");	
}

function ShowTooltip(evt)
{
  tooltip.setAttributeNS(null,"x",evt.clientX-8);

  tooltip.setAttributeNS(null,"y",evt.clientY-5);

  tooltip.setAttributeNS(null,"visibility","visible");
}

 

function HideTooltip()
{
  tooltip.setAttributeNS(null,"visibility","hidden");
}



window.addEventListener('load', reagirLoadPage, false);