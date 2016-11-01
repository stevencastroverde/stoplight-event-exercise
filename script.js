/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.



  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
//Stop light
	document.getElementById('stopButton').addEventListener('click', function(){
		document.getElementById('stopLight').style.background = 'red';
	})

//Slow Button
	document.getElementById('slowButton').addEventListener('click', function (){
		document.getElementById('slowLight').style.background = 'orange';

	})

//go Button
	document.getElementById('goButton').addEventListener('click',function(){
		document.getElementById('goLight').style.background = 'green';
	})
