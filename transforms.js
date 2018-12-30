<script type="text/javascript">

	function distance () {

// 		Define the meters object first, put in a hidden span ID
		var meters = document.getElementById("distance_hidden").innerHTML;
// 		Define the miles by doing basic math
		var miles = meters*0.000621371192;
// 		Restrict the returned value to two decimal places
			miles = Number.parseFloat(miles).toFixed(2);
// 		Place the new clean miles value to visible span ID
		document.getElementById('distance').innerHTML = miles + "&nbsp;" + "mi";

	};


	function time () {

// 		Define the seconds object first, put in a hidden span ID
		var seconds = document.getElementById("time_hidden").innerHTML;
// 		Define the hours by doing basic math
		var hours = seconds/3600;
// 		Restruct the returned value to two decimal places
			hours = Number.parseFloat(hours).toFixed(2);
// 		Place the new clean hours value to visible span ID
		document.getElementById('time').innerHTML = hours + "&nbsp;" + "hrs";

	};

	function distancerun () {

// 		Define the meters object first, put in a hidden span ID
		var metersrun = document.getElementById("distancerun_hidden").innerHTML;
// 		Define the miles by doing basic math
		var milesrun = metersrun*0.000621371192;
// 		Restrict the returned value to two decimal places
			milesrun = Number.parseFloat(milesrun).toFixed(2);
// 		Place the new clean miles value to visible span ID
		document.getElementById('distancerun').innerHTML = milesrun + "&nbsp;" + "mi";

	};

	function timerun () {

// 		Define the seconds object first, put in a hidden span ID
		var secondsrun = document.getElementById("timerun_hidden").innerHTML;
// 		Define the hours by doing basic math
		var hoursrun = secondsrun/3600;
// 		Restruct the returned value to two decimal places
			hoursrun = Number.parseFloat(hoursrun).toFixed(2);
// 		Place the new clean hours value to visible span ID
		document.getElementById('timerun').innerHTML = hoursrun + "&nbsp;" + "hrs";

	};

	function weight () {

// 		Define the current weight object, put in a hidden span ID
		var currentweight = document.getElementById("weighthidden").innerHTML
// 		Convert kgs to lbs
		var fixedweight = currentweight*2.205;
// 		Restruct the returned value to two decimal places
			shownweight = Number.parseFloat(fixedweight).toFixed(2);
// 		Place the new clean weight value to visible span ID
		document.getElementById('weight').innerHTML = shownweight + "&nbsp;" + "lbs";
// 		Set variables for weight left to lose
		var remainingweight = shownweight - 195
// 		Set decimal float to two decimals
		remainingweight = Number.parseFloat(remainingweight).toFixed(2);
		console.log(remainingweight);
// 		Place this value into weight remaining ID
		document.getElementById('poundstogo').innerHTML = "Left to lose:" + "&nbsp;" + remainingweight + "&nbsp;" + "lbs";

	};

	distance ();
	time ();
	distancerun ();
	timerun ();
	weight ();

</script>
