<?php
			include('./latLong2UTM.php');
				
				//echo 'je vais passé';
				
				$i = 0;
				$databasename = 'flotteautobus'; //databasename

				$connecDB = mysql_connect('10.0.0.139', 'projet', 'projet')or die();
				
				mysql_select_db($databasename,$connecDB);
				
				
				//echo 'je suis passé';
					
				
				
				$sql = 'SELECT id,longitude,latitude,nom_long_arret FROM arretsligne27';
				
				
				$req = mysql_query($sql) or die();
				
				while($data = mysql_fetch_assoc($req)) 
					{ 
				//
				$i++;
				$longitude = $data['longitude'];
				$latitude = $data['latitude'];
				$nomLigne = $data['nom_long_arret'];
				
				latLong2Pixel($latitude, $longitude);
				
				echo($latitude . '|' . $longitude .'|'. $nomLigne . '||');
				

					}
					
	
				mysql_free_result ($req);
				
				
				
				
				mysql_close ();
				
				
				

				
				
				
		
?>









				






