$(document).ready(function(){
	//Inicializa a mascara do telefone
	//$("#telefone").mask("(99)9999-9999");
	//$('#slider').nivoSlider();
	
	//Copia os dados do endereco
	//var original = $('#contato_dados').html();
	//$('#local_dados').html(original);
	
	abrirMapa = function(){
		var href = 
		
		//"https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=pt&amp;geocode=&amp;q=R.+Germano+Wetzel,+167+-+Bom+Retiro,+Joinville+-+SC,+Rep%C3%BAblica+Federativa+do+Brasil&amp;aq=&amp;sll=-26.263463,-48.848144&amp;sspn=0.011064,0.01929&amp;ie=UTF8&amp;hq=&amp;hnear=R.+Germano+Wetzel,+167+-+Bom+Retiro,+Joinville+-+Santa+Catarina,+89223-010,+Brasil&amp;ll=-26.263458,-48.848155&amp;spn=0.011064,0.01929&amp;t=m&amp;z=14";
		"https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=pt&amp;geocode=&amp;q=R.+Germano+Wetzel,+167+-+Bom+Retiro,+Joinville+-+SC,+Rep%C3%BAblica+Federativa+do+Brasil&amp;aq=&amp;sll=-26.263463,-48.848144&amp;sspn=0.011064,0.01929&amp;ie=UTF8&amp;hq=&amp;hnear=R.+Germano+Wetzel,+167+-+Bom+Retiro,+Joinville+-+Santa+Catarina,+89223-010,+Brasil&amp;ll=-26.263458,-48.848155&amp;spn=0.011064,0.01929&amp;t=m&amp;z=14&amp;output=embed";
		
		window.open(href);
	};
	
	abrirEmail = function(){
		var href = 'http://www.uniintegrada.com.br:2095';
		window.open(href);
	};
	
	abrirSite = function(href){
		window.open(href);
	}
	
	function checkMail(mail){
		var parte1 = mail.indexOf("@");
		var parte2 = mail.indexOf(".");
		var parte3 = mail.length;
		if ((parte1 >= 3 && parte2 >= 6 && parte3 >= 9)) {
			//email valido
			return false;
		}else {
			//email invalido
			return true;
		}
	};
	
	$("#enviar").click(function() {
		//Valida campo nome
		if($("#nome").val() ==="" ){
			jAlert('Favor, preencha seu nome.', 'Aviso');
			$("#nome").focus();
			return false;
		}
		
		//Valida campo telefone
		if($("#telefone").val() ==="" ){
			jAlert('Favor, preencha seu telefone.', 'Aviso');
			$("#telefone").focus();
			return false;
		}
				
		//Valida campo email
		if(checkMail($("#email").val()) || $("#email").val() === ""){
			jAlert('Favor, preencha um email válido.', 'Aviso');
			$("#email").focus();
			return false;
		}
		
		// //Valida campo assunto
		// if($("#assunto").val() ==="" ){
			// jAlert('Favor, coloque um assunto para sua mensagem.', 'Aviso');
			// $("#assunto").focus();
			// return false;
		// }
		
		// //Valida campo mensagem
		// if($("#mensagem").val() ==="" ){
			// jAlert('Favor, escreva-nos uma mensagem.', 'Aviso');
			// $("#mensagem").focus();
			// return false;
		// }
		
		form_contato.submit();
	});
	//Adicinar codigo abaxio
	
	function curriculoAndressa(){
		var htmlCurriculo = "<h1>Welcome</h1>";
		
		$.colorbox({
			html:htmlCurriculo
		});
	}
	
	function curriculoDeise(){
		var htmlCurriculo = "<h1>Welcome</h1>";
		
		$.colorbox({
			html:htmlCurriculo
		});
	}
	
		
	/*
	*Currirulo Andressa
	* INICIO
	*/
	
	$('#curriculoAndressa').dialog({
		autoOpen: false,
		width: 670,
		height: 500,
		modal:true,
		resizable:false
	});

	// Dialog Link
	$('#curriculoAndressaLink').click(function(){
		$('#curriculoAndressa').dialog('open');
		return false;
	});
	
	/*
	*Currirulo Andressa
	* FIM
	*/

	
});