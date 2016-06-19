<?php
			include('./latLong2UTM.php');
			
				$lastid = $_GET['lastid'];
							
				$i = 1;				
				
				$databasename = 'flotteautobus'; //databasename
				$connecDB = mysql_connect('10.0.0.139', 'projet', 'projet')or die();//('could not connect to database');				
				mysql_select_db($databasename,$connecDB);		
				
				
				//$sql = 'SELECT id,longitude,latitude,nom_long_arret FROM arretsligne27 WHERE id > '.$lastid.'';  // where id >=  $lastid     //pour test where id >  $lastid && id <  ($lastid)+1
				// cas normal
				//$sql = 'SELECT id,longitude,latitude FROM ititheoligne27 WHERE id > '. $lastid .'';  // where id >=  $lastid     //pour test where id >  $lastid && id <  ($lastid)+1
				// cas test
				//$sql = 'SELECT id,longitude,latitude FROM ititheoligne27 WHERE id > '. $lastid .' AND id < '. ($lastid+1) .'';
				
				$sql = 'SELECT id,longitude,latitude FROM ititheoligne27 LIMIT '. ($lastid-1) .','.$i.'';
				
				$i++;
			
				//$sql = 'SELECT id,longitude,latitude FROM ititheoligne27 LIMIT '. ($lastid) .','. ($lastid+1) .'';
				
			
				//$sql = 'SELECT id,longitude,latitude FROM ititheoligne27 LIMIT 10 OFFSET 5';
				//$sql = 'SELECT id,longitude,latitude FROM ititheoligne27 WHERE id = '.($lastid+1).'';
				$req = mysql_query($sql) or die();//('Erreur SQL !<br />'.$sql.'<br />'.mysql_error());
				
				while($data = mysql_fetch_assoc($req)) 
					{ 
						//
						$id = $data['id'];
						$longitude = $data['longitude'];
						$latitude = $data['latitude'];
						//$nomLigne = $data['nom_long_arret'];					
						latLong2Pixel($latitude, $longitude);
						
						echo(  $id .'|'. $latitude .'|'. $longitude . '||');
					}
					
	
				mysql_free_result ($req);
				
				
				
				
				mysql_close ();
				
				
				

				
				
				
		
?>









				






