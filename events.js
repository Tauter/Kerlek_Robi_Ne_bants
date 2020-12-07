$(function(){
	$("#form").on("submit",function(e){
		var $success = false;
		if ($("#vezetekNev").val().trim() == "" && $("#keresztNev").val().trim() == "" && $("#email").val().trim() =="") {
			$("#error_text").text("Csillagal jelölt mezők kitöltése kötelező!");
			$success = false;
			$("#vezetekNev").addClass("error");
            $("#keresztNev").addClass("error");
            $("#email").addClass("error");
		}else if ($("#vezetekNev").val().trim()=="" && $("#keresztNev").val().trim() =="") {
			$success = false;
			$("#error_text").text("Csillagal jelölt mezők kitöltése kötelező!");
			$("#vezetekNev").addClass("error");
            $("#keresztNev").addClass("error");
            $("#email").removeClass("error");
		}else if ($("#vezetekNev").val().trim()=="" && $("#email").val().trim() ==""){
			$success = false;
			$("#error_text").text("Csillagal jelölt mezők kitöltése kötelező!");
			$("#vezetekNev").addClass("error");
            $("#keresztNev").removeClass("error");
            $("#email").addClass("error");
        }else if ($("#keresztNev").val().trim()=="" && $("#email").val().trim() ==""){
			$success = false;
			$("#error_text").text("Csillagal jelölt mezők kitöltése kötelező!");
			$("#vezetekNev").removeClass("error");
            $("#keresztNev").addClass("error");
            $("#email").addClass("error");
        }else if( $("#keresztNev").val().trim()==""  ){
			$success = false;
			$("#error_text").text("Csillagal jelölt mezők kitöltése kötelező!");
			$("#keresztNev").addClass("error");
			$("#email").removeClass("error");
            $("#vezetekNev").removeClass("error");
        }else if( $("#vezetekNev").val().trim()=="" ){
			$success = false;
			$("#error_text").text("Csillagal jelölt mezők kitöltése kötelező!");
			$("#keresztNev").removeClass("error");
			$("#email").removeClass("error");
            $("#vezetekNev").addClass("error");
		}else if($("#email").val().trim() ==""){
			$success = false;
			$("#error_text").text("Csillagal jelölt mezők kitöltése kötelező!");
			$("#keresztNev").removeClass("error");
			$("#email").addClass("error");
            $("#vezetekNev").removeClass("error");
		}
        else{
            $success = true;
            $("#error_text").text(" ");
            $("#email").removeClass("error");
            $("#vezetekNev").removeClass("error");
            $("#keresztNev").removeClass("error");
		}
		
		let jsElotag ="";
		if($("#elotag").val().trim() == "" ){
			jsElotag = "";
		}else{
			jsElotag = $("#elotag").val().trim();
		}
		let hirl = "";
		if($("#hirLevel:checked").val() == "hirLevelIgen"){
			hirl = "Igen";
		}else{
			hirl = "Nem";
		}
		let jsNem = "";
		if($("#ferfi:checked").val() == "Férfi"){
			jsNem = "Férfi";
		}else if($("#no:checked").val() == "Nő"){
			jsNem = "Nő";
		}else if($("#egyeb:checked").val() == "Egyéb"){
			jsNem = "Egyéb";
		}else{
			jsNem = "";
		}
		if (!$success){
			e.preventDefault();
		}else{
			temp =  $("#email").val().trim();
			let temp2 = $("#vezetekNev").val().trim();
			let temp3 = $("#keresztNev").val().trim();
			let temp4 = $("#egyebInfo").val().trim();
			$.ajax({
				async:false,
				type: 'POST',
				url:'php/ajax.php',
				dataType: 'TEXT',
				data:{
					elotag: jsElotag,
					vezeteknev: temp2,
					keresztnev: temp3,
					email: temp,
					nem:jsNem,
					hirlevel:hirl,
					egyebinfo:temp4
				},
				success:alert("Sikeres bevitel!"),
			});
			e.preventDefault();
			$("#form")[0].reset();
		}
	});

	$("body").on('click', '.toroldLe', function(e){
		let torlesID = $(this).val();
		$.ajax({
			async:false,
			type: 'POST',
			url:'php/ajax.php',
			dataType: 'TEXT',
			data:{
				torles:"yes",
				id:torlesID
			},
			success:function(){
				alert("Sikeres törlés");
				$("#tableId").load(window.location + " #tableId");
			}
		});
		e.preventDefault();
	});

});