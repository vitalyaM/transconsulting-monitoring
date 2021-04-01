$(function() {
	'use strict';


	/* Шаги
	------------------------------------------------------- */
	if($('.step').hasClass('step20')) {
		showSMS1();
	}

	$('.js-get-step').on('click', function(){
		let $step = $(this).data('step');
		$('.js-step').removeClass('active');
		$($step).addClass('active');

		if ($step === '#js-step24') {
			showSMS(); //показываем SMS
		}

		return false;
	});


	/* SMS1
	------------------------------------------------------- */
	function showSMS1() {
		const $arr = [
			'А777АА 177 получен новый годовой <br>пропуск БА0580926, дата окончания <br>28.02.2021, зона действия ТТК',
			'А777АА 177 годовой пропуск <br>БА0580926 аннулирован'
		];

		let $time = 1000;

		$.each($arr, function($index, $value){
			setTimeout(function(){
				let $sms = $('<li class="sms-item">'+ $value +'</li>');
				$('#js-sms-status-20').append($sms);
			}, $time);

			$time += 1000;
		});
	}

	/* SMS
	------------------------------------------------------- */
	function showSMS() {
		const $arr = [
			'Автомобиль А777АА77 177 успешно<br>поставлен на мониторинг от<br>анулирования пропуска',
		];

		let $time = 2000;

		$.each($arr, function($index, $value){
			setTimeout(function(){
				let $sms = $('<li class="sms-item">'+ $value +'</li>');
				$('#js-sms-status-24').append($sms);
			}, $time);

			$time += 2000;
		});
	}


	/* Номер транспортного средства
	------------------------------------------------------- */
	$('.js-num').mask('a999aa', {placeholder: ''});
	$('.js-num2').mask('99?9', {placeholder: ''});

	$('.js-num').on('keyup', function(){
		let $input = $(this);

		if ($input.val().length > 5) {
			$input.next('.js-num2').focus();
		}

	});


});
