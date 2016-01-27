<?php

				$databasename = 'hecube_demo'; //databasename

				$connecDB = mysql_connect('localhost', 'root', 'root')or die('could not connect to database');
				mysql_select_db($databasename,$connecDB);
				
				$sql = 'SELECT adresse FROM people WHERE nom ="Gonzalez"';
				$req = mysql_query($sql) or die('Erreur SQL !<br />'.$sql.'<br />'.mysql_error());
				$data = mysql_fetch_array($req);
				mysql_free_result ($req);
				mysql_close ();
				echo $data['adresse'];
				

				
				
				
				
				
?>	


