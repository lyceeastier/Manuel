<?php


function latLong2Pixel(&$Lat, &$Long)
{

	$PI = 3.14159265;
	$deg2rad = $PI / 180;
	$rad2deg = 180.0 / $PI;
	$a = 6378137 ;
	$Ecc = 0.00669438 ;
	$k0 = 0.9996;


	$LongTemp = ($Long + 180) - floor(($Long + 180)/360)*360 - 180;
	$LatRad = $Lat*$deg2rad;
	$LongRad = $LongTemp*$deg2rad;
	$NoZone = floor(($LongTemp + 180)/6) + 1;

	if( $Lat >= 56.0 && $Lat < 64.0 && $LongTemp >= 3.0 && $LongTemp < 12.0 )
	{
		$NoZone  = 32;
	}

	if( $Lat >= 72.0 && $Lat < 84.0 )
	{
		if($LongTemp >= 0.0  && $LongTemp <  9.0 )
		{
			$NoZone  = 31;
		}
		else if( $LongTemp >= 9.0  && $LongTemp < 21.0 )
		{
			$NoZone  = 33;
		}
		else if( $LongTemp >= 21.0 && $LongTemp < 33.0 )
		{
			$NoZone  = 35;
		}
		else if( $LongTemp >= 33.0 && $LongTemp < 42.0 )
		{
			$NoZone  = 37;
		}
	}

		$LongOrigin = ($NoZone - 1)* 6 - 180 + 3;
		$LongOriginRad = $LongOrigin * $deg2rad;

		$eccPrimeCarre = ($Ecc)/(1- $Ecc);

		$N = $a/sqrt(1- $Ecc * sin($LatRad) * sin($LatRad));
		$T = tan($LatRad) * tan($LatRad);
		$C = $eccPrimeCarre*cos($LatRad)*cos($LatRad);
		$A = cos($LatRad)*($LongRad-$LongOriginRad);

		$M = $a*((1 - $Ecc/4 - 3*$Ecc*$Ecc/64 - 5*$Ecc*$Ecc*$Ecc/256)*$LatRad - (3*$Ecc/8 + 3*$Ecc*$Ecc/32  + 45*$Ecc*$Ecc*$Ecc/1024)*sin(2*$LatRad) + (15*$Ecc*$Ecc/256 + 45*$Ecc*$Ecc*$Ecc/1024)*sin(4*$LatRad) - (35*$Ecc*$Ecc*$Ecc/3072)*sin(6*$LatRad));

		$LongUTM = ($k0*$N*($A+(1-$T+$C)*$A*$A*$A/6 + (5-18*$T+$T*$T+72*$C-58*$eccPrimeCarre)*$A*$A*$A*$A*$A/120) + 500000.0);

		$LatUTM = ($k0*($M+$N*tan($LatRad)*($A*$A/2+(5-$T+9*$C+4*$C*$C)*$A*$A*$A*$A/24 + (61-58*$T+$T*$T+600*$C-330*$eccPrimeCarre)*$A*$A*$A*$A*$A*$A/720)));

		if($Lat < 0)
		{
			$LatUTM += 10000000.0;
		}
		
		$LatMetres = $LatUTM;
		$LongMetres = $LongUTM;

		//echo( '   METRE '. $LatMetres . '|' . $LongMetres);
		
		// RATIO ADAPTATION PIXELS
		//Point A : Coin haut gauche :  44.966679, 4.877330   
					//-->  metriques =   (  lat = 4980963.227638445 N et Long= 648048.1265052189 E   ) 


	//Point B : Coin Bas droite :    44.893403, 4.950823   -->  metriques =
					//-->  metriques =   (  lat = 4972960.154880919 N et Long= 654039.6759752901 E   )   
		
		//La carte commence à 0,0 pixels mais een metres à 44.966679, 4.877330 
		
		
		$ratio = 0.4;
		
		// Longitude
		$XPixel = ($LongMetres - 648048.1265052189)*$ratio;
		//Latitude
		$YPixel = ($LatMetres - 4980963.227638445)*$ratio*(-1);
		//echo('     pixel       ' . $XPixel . '|' . $YPixel);
		$Lat = $XPixel;
		$Long = $YPixel;
}

?>
