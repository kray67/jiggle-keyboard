$(window).on('load', function() {
	var allKeys = $('.key').map(function() {
		return this.dataset['key'];
	}).get();
	var targetKey;
	var $ele;
	var keyIsVibrating = false;
	startVibrating();

	function getRandomNumber() {
		return Math.floor(Math.random() * (52 - 0 + 1) + 0);
	}

	function vibrateKey(key) {
		$ele = $(".keyboard").find(".key[data-key='" + key + "']");
		$ele.addClass('jiggle');
		keyIsVibrating = true;
	}

	function startVibrating() {
		const randomNumber = getRandomNumber();
		targetKey = allKeys[randomNumber];
		setTimeout(function() {
			vibrateKey(targetKey);
		}, 3000);
	}

	function stopVibrating() {
		$ele.removeClass('jiggle');
		keyIsVibrating = false;
		startVibrating();
	}

	$('.key').click(function() {
		if ((this.dataset["key"] === $ele[0].dataset["key"]) && keyIsVibrating) {
			stopVibrating();
		}
	});

	$(document).on('keypress', function(e) {
		if ((e.key.toUpperCase() === $ele[0].dataset["key"]) && keyIsVibrating) {
			stopVibrating();
		}
	});
});
