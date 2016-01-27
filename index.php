<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
</head>
<body>

<input  type="submit" value="Ce Connecter" class="submit"/>
</div>
</body>
</html>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.0/jquery.min.js"></script>
<script type="text/javascript">

$(function() {
$(".submit").click(function() {
console.log("information envoyé")

	

$.ajax({
        url : 'connect.php', // give complete url here
        type : 'post',
		
        success : function(data){
            console.log('SUCCESS');
			console.log(data);
        }
    });
	
	
});

});
</script>

