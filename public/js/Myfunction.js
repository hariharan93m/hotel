$(document).ready(
		function() {

			$("#mydropdown").change(
					function() {
						var x = $("#mydropdown").val();
						Location = "Thiruvanmayur";
						if ((x == "Adayar") || (x == "Thiruvanmayur")
								|| (x == "Guindy")) {
							$("#LocationDisplay").html("You selected: "
									+ x + " your near by Location is "
									+ Location);

						}

						else if ((x == "Kanthansavadi") || (x == "MgrNagar")
								|| (x == "Taramani")) {
							Location = "Kanthansavadi";
							$("#LocationDisplay").html("You selected: "+ x +"  your near by Location is"+ Location);

						} else if ((x == "Thoraipakkam") || (x == "ECR")
								|| (x == "OMR")) {
							Location = "Thoraipakkam";
							$("#LocationDisplay").html("You selected: "+ x + " your near by Location is"+ Location);

						} else if ((x == "Kovilambakkam") || (x == "Tambaram")
								|| (x == "Medavakkam")) {
							Location = "Kovilambakkam";
							$("#LocationDisplay").html("You selected: "+ x + " your near by Location is"+ Location);

						}

					});

			$('#Q1').blur(function() {
				Q1 = $('#Q1').val();
				price_1 = Q1 * 70;
				$('#lq1').html(price_1 + "Rs");
				var Total_price = price_1
				$('#tq').html(Total_price + "Rs");
			});
			$('#Q2').blur(function() {
				Q2 = $('#Q2').val();
				price_2 = Q2 * 120;
				$('#lq2').html(price_2 + "Rs");
				var Total_price = price_1 + price_2;
				$('#tq').html(Total_price + "Rs");
			});
			$('#Q3').blur(function() {
				Q3 = $('#Q3').val();
				price_3 = Q3 * 150;
				$('#lq3').html(price_3 + "Rs");
				var Total_price = price_1 + price_2 + price_3;
				$('#tq').html(Total_price + "Rs");
	
			});
			$('#usrform').submit(function() {
				
				$.ajax({
					url : "/formsubmit?price_1="+Q1 + "&price_2="+Q2 + "&price_3="+Q3 +"&Location="+Location,
					method : "GET",
					datatype : "json",
					success : function(result) {
						/*alert(Location + ' is Inserted Successfully');*/
						console.log(Location);
					}
				});

			});
});
