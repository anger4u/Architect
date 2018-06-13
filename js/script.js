	var logo = document.getElementById("logo1");
	var head_search = document.getElementById("head_search");

	head_search.onfocus = function () {
		logo.style="opacity: 0;";
	}

	head_search.onblur = function () {
		logo.style="opacity: 1;";
	}

