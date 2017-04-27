(function($) {

	$.fn.datanasc = function(options) {

		var defaults = {
			'idadeLimite': 100,
			'output': 'span',
			'outputClass': 'alert',
			'colorOK': '#0acb0a',
			'colorError': '#f44336'
		}

		var settings = $.extend({}, defaults, options);


		return this.each(function() {

			var d = new Date();
			var diaAtual = d.getDate();		
			var mesAtual = d.getMonth()+1;
			var anoAtual = d.getFullYear();

			$(this).attr('maxlength', 10);

			$(this).keyup(function(event) {
				var regex = $(this).val().replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{2})(\d)/, '$1/$2');
				$(this).val(regex);

				var separaData = $(this).val().split('/');
				var diaDigitado = separaData[0];
				var mesDigitado = separaData[1];
				var anoDigitado = separaData[2];

				if (diaAtual < 10) {
					diaAtual = '0'+diaAtual;
				}
				if (mesAtual < 10) {
					mesAtual = '0'+mesAtual;
				}
				if (anoDigitado > anoAtual) {
					$(this).val('');
					$(settings.output+'.'+settings.outputClass).text('O ano digitado (' +anoDigitado+ ') não pode ser maior que o ano atual (' +anoAtual+ ')');
					$(this).css('border', '1px solid'+ settings.colorError);
				} 
				if (mesDigitado > 12) {
					$(this).val('');
					$(settings.output+'.'+settings.outputClass).text('O mês digitado (' +mesDigitado+ ') não pode ser maior que a quantidade de meses existentes (12)');
					$(this).css('border', '1px solid'+ settings.colorError);
				}

				if ((anoDigitado <= anoAtual) && (mesDigitado <= 12)) {
					$(settings.output+'.'+settings.outputClass).text();
					$(this).css('border', '1px solid'+ settings.colorOK);

				}
			});

			$(this).on('blur', function() {

				const ANOLIMITE = settings.idadeLimite;

				var separaData = $(this).val().split('/');
				var diaDigitado = separaData[0];
				var mesDigitado = separaData[1];
				var anoDigitado = separaData[2];

				var diasNoMes = '';

				if (anoDigitado < (anoAtual-ANOLIMITE)) {
					$(this).val('');
					$(settings.output+'.'+settings.outputClass).text('Idade limite permitida: ' +ANOLIMITE+ ' anos');
					$(this).css('border', '1px solid'+ settings.colorError);
				}

				if (mesDigitado == 12) {
					diasNoMes = 31;
				} else if (mesDigitado == 11) {
					diasNoMes = 30;
				} else if (mesDigitado == 10) {
					diasNoMes = 31;
				} else if (mesDigitado == 09) {
					diasNoMes = 30;
				} else if (mesDigitado == 08) {
					diasNoMes = 31;
				} else if (mesDigitado == 07) {
					diasNoMes = 31;
				} else if (mesDigitado == 06) {
					diasNoMes = 30;
				} else if (mesDigitado == 05) {
					diasNoMes = 31;
				} else if (mesDigitado == 04) {
					diasNoMes = 30;
				} else if (mesDigitado == 03) {
					diasNoMes = 31;
				} else if (mesDigitado == 02) {
					if (((anoDigitado % 4 == 0) && (anoDigitado % 100 != 0)) || (anoDigitado % 400 == 0)) {
						diasNoMes = 29;
					} else {
						diasNoMes = 28;
					}
				} else if (mesDigitado == 01) {
					diasNoMes = 31;
				}

				if (diasNoMes < diaDigitado) {
					$(this).val('');
					$(settings.output+'.'+settings.outputClass).text('Data inexistente (' +diaDigitado+'/'+mesDigitado+'/'+anoDigitado+ ')');
					$(this).css('border', '1px solid'+ settings.colorError);
				}
			});

		});

	}

})(jQuery);