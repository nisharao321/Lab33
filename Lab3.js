function navNext()
{
	for (temp = 0; temp <= 12 ; temp++)
	{
		document.getElementById('canvas'+temp).style.visibility="hidden";
	}

	simsubscreennum+=4;
;
	document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
	document.getElementById('nextButton').style.visibility="hidden";
	magic();
}

var ca;
var questions = ["Pitot static tube contain________concentric tube.",
"Pitot static pressure is directly used for"
];

var options2 = [
		["Two", "Three", "Four", "None of these"], //Two
		["Average air velocity across crossectional area", "Air Velocity at a point", "Pressure at a point", "Average position"], //Meter of air
]; //True];

function validateAnswer(qn, ans, left, top) {
		$("#answer").empty();
		document.getElementById("a").innerHTML = "";
		document.getElementById("questDiv").style = "position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" + left + ";top:" + top + ";";
		document.getElementById("q").innerHTML = questions[qn];
		if (qn == 0) document.getElementById('questDiv').style.width = "370px";
		if (qn == 1) document.getElementById('questDiv').style.width = "370px";

		el = document.createElement("option");
		el.textContent = " ";
		el.value = " ";
		answer.appendChild(el);

		for (j = 0; j < options2[qn].length; j++) {
				opt = options2[qn][j];

				el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				answer.appendChild(el);
				$("#answer").change(function() {
						ca = $(this).children("option:selected").val();
						if (options2[qn][ans] == ca) {
								document.getElementById("a").innerHTML = "Correct Answer!";
						}
						else {
								document.getElementById("a").innerHTML = "Wrong! Answer is " + options2[qn][ans];
						}
						setTimeout(function() {
								document.getElementById("questDiv").style.visibility = "hidden";
								document.getElementById("nextButton").style.visibility = "visible";
						}, 1500);
				});
		}
}



function right_condition(para_button,para_wrong,para_right,para_button1){
	document.getElementById(para_button).style.visibility='hidden';
	document.getElementById(para_wrong).style.visibility="hidden";
	document.getElementById(para_right).style.visibility="visible";
	document.getElementById(para_button1).style.visibility='visible';
}

function wrong_condition(para_output,para_wrong,para_right){
	document.getElementById(para_output).value="";
	document.getElementById(para_wrong).style.visibility="visible";
	document.getElementById(para_right).style.visibility="hidden";
}
function button(para_button,para_wrong){
	document.getElementById(para_button).style.visibility="hidden";
	document.getElementById(para_wrong).style.visibility="hidden";
}

var p=Math.floor(Math.random()*(2));

var data = [[12, 1.7, 8.06],
[24, 3.2, 7.59],
[30, 4.0, 7.59],
];

var data1=[[18.1,19.6,1.5,18.6,19.2,0.6,18.4,19.3,0.9],
[18.2,19.7,1.5,18.5,19.1,0.6,18.5,19.4,0.9]];

var data2=[[17.4,20.3,2.9,17.4,20.9,3.5,18.2,19.6,1.4],
[17.3,20.2,2.9,17.3,20.8,3.5,18.1,19.5,1.4]];

var data3=[[16.8,20.4,3.6,18.3,19.2,0.9,17.6,19.8,2.2],
[16.7,20.3,3.6,18.2,19.1,0.9,17.5,19.7,2.2]];

var data4=[[16.4,21.3,4.9,19.2,21.6,2.4,18,20.5,2.5],
[16.3,21.2,4.9,19.1,21.5,2.4,18.1,20.6,2.5]];


//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
 if (document.getElementById('arrow1').style.visibility=="hidden")
	 document.getElementById('arrow1').style.visibility="visible";
 else
	 document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction()
{
	clearInterval(myInt);
	document.getElementById('arrow1').style.visibility="hidden";
}
var j0=0;
function fillTable(repeat)
{
	var tb1 = document.getElementById("table1");
	var row = tb1.insertRow();
	var cell = row.insertCell();
	cell.innerHTML =(repeat+1);
	for (i = 0; i <= data[j0].length-1; i++)
	{
		var cell = row.insertCell();
		cell.innerHTML = data[j0][i];
	}
	j0++;
 /*  console.log(j); */
	// fillFinalTable();
	// machineoff();
}

var j1=0;
function fillTable1(repeat)
{

	var tb2 = document.getElementById("table2");
	var row = tb2.insertRow();
	var cell = row.insertCell();
	cell.innerHTML =(repeat+1);
	for (i = 0; i <= data[j1].length-1; i++)
	{
		var cell = row.insertCell();
		cell.innerHTML = data[j1][i];
	}
	j1++;
	
	// fillFinalTable();
	// machineoff();
}
//-------------------------------------function magic starts here----------------------------------------------------
function animateArrowATPosition(left,top,height,degg)
{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height:"+height+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)";
	 // Code for IE9
	 document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	 // Standard syntax
	 document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
 }
 function magic()
 {

	 if (simsubscreennum==1)
	 {
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(60,85,20,270);
		document.getElementById('a3').onclick=function() { step1(); };
	}
	if (simsubscreennum==2)
	{
	    document.getElementById('arrow2').style.visibility="hidden";
	    document.getElementById('wind').style.visibility="hidden";
		document.getElementById('m9').style.visibility="hidden";
		document.getElementById('m10').style.visibility="hidden";
		document.getElementById('a2').style.visibility="hidden";
		document.getElementById('a5').style.visibility="hidden";
		document.getElementById('a6').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(750,150,20,720);
		document.getElementById('a12').onclick=function() { step2(); };
	}
	if (simsubscreennum==3)
	{
	    document.getElementById('ca-1').style.visibility="hidden";
		document.getElementById('ca-2').style.visibility="hidden";
		document.getElementById('ca-3').style.visibility="hidden";

		
		document.getElementById('a15').style.visibility="hidden";
		document.getElementById('10').style.visibility = "visible";
				document.getElementById('ok').onclick = function() {
		document.getElementById('10').style.visibility = "hidden";
		document.getElementById('ok').style.visibility = "hidden";
		document.getElementById('can1').style.visibility="visible";
				document.getElementById('can2').style.visibility="visible";
		document.getElementById('can3').style.visibility="visible";
		
		document.getElementById('m-1').style.visibility="visible";
				document.getElementById('m-2').style.visibility="visible";
		document.getElementById('m-5').style.visibility="visible";
				document.getElementById('a1-1').style.visibility="visible";
				document.getElementById('a1-11').style.visibility="visible";
		 
		 setTimeout(function()
		{
		
			document.getElementById('a2-1').style.visibility="visible";
			document.getElementById('a2-11').style.visibility="visible";
	 
		 document.getElementById('m-3').style.visibility="visible";
			document.getElementById('m-4').style.visibility="visible";

			document.getElementById('a1-4').style.visibility="visible";
			document.getElementById('a3-1').style.visibility="visible";

			setTimeout(function()
			{ 
				document.getElementById('c1').style.visibility="visible";
			    document.getElementById('m-6').style.visibility="visible";
	 
				document.getElementById('m-1').style.visibility="hidden";
				document.getElementById('m-2').style.visibility="hidden";
		        document.getElementById('m-5').style.visibility="hidden";

				document.getElementById('can1').style.visibility="hidden";
				document.getElementById('can2').style.visibility="hidden";
		        document.getElementById('can3').style.visibility="hidden";

				document.getElementById('m-3').style.visibility="hidden";
				document.getElementById('m-4').style.visibility="hidden";
				document.getElementById('a1-21').style.visibility="visible";
				document.getElementById('a1-2').style.visibility="visible";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				animateArrowATPosition(150,200,20,180);
				document.getElementById('a1-21').onclick=function() { step3(); };
		},3000);
		},4000);
};
	}
	if (simsubscreennum==4)
	{
	 document.getElementById('a1-1').style.visibility="hidden";
	 document.getElementById('a1-11').style.visibility="hidden";
	 document.getElementById('a2-1').style.visibility="hidden";
	 document.getElementById('a2-11').style.visibility="hidden";
	 document.getElementById('a1-4').style.visibility="hidden";
	 document.getElementById('a3-1').style.visibility="hidden";
	 document.getElementById('a1-2').style.visibility="hidden";
	 document.getElementById('a41-11').style.visibility="hidden";
	 document.getElementById('a1-22').style.visibility="hidden";
	 for(i=0;i<=data1[p].length-1;i++)
	 {
		document.getElementById("ro"+i).innerHTML=data1[p][i];
	}
	var flag1=0;
	var ans_2=1.5694;
	document.getElementById('button').onclick=function() {
		if(document.getElementById('output').value=="")
		{
			if(document.getElementById('button').innerHTML==="Result"){
				document.getElementById('output').value=1.5691;
				document.getElementById('button1').style.visibility="visible";
				button('button','wrong');
			}
			else
				alert("Enter the value to proceed");
		}
		else {
			if(document.getElementById('output').value==1.5691)
				right_condition('button','wrong','right','button1');
			else{
				flag1+=1;
				wrong_condition('output','wrong','right');
				if (flag1===2){
				 if(document.getElementById('output').value==1.5691)
					document.getElementById('right').style.visibility="visible";
				else
					document.getElementById('button').innerHTML="Result";
			}               
		}
	}
};

var flag2=0;
var ans_3=0.6259;
document.getElementById('button1').onclick=function() {
	if(document.getElementById('output1').value=="")
	{
		if(document.getElementById('button1').innerHTML==="Result"){
			document.getElementById('output1').value=0.6259;
			document.getElementById('button2').style.visibility="visible";
			button('button1','wrong1');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output1').value==0.6259)
			right_condition('button1','wrong1','right1','button2');
		else{
			flag2+=1;
			wrong_condition('output1','wrong1','right1');
			if (flag2===2){
			 if(document.getElementById('output1').value==0.6259)
				document.getElementById('right1').style.visibility="visible";
			else
				document.getElementById('button1').innerHTML="Result";
		}               
	}
}
};
var flag3=0;
var ans_4=0.9389;
document.getElementById('button2').onclick=function() {
	if(document.getElementById('output2').value=="")
	{
		if(document.getElementById('button2').innerHTML==="Result"){
			document.getElementById('output2').value=0.9389;
			document.getElementById('button3').style.visibility="visible";
			button('button2','wrong2');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output2').value==0.9389)
			right_condition('button2','wrong2','right2','button3');
		else{
			flag3+=1;
			wrong_condition('output2','wrong2','right2');
			if (flag3===2){
			 if(document.getElementById('output2').value==0.9389)
				document.getElementById('right2').style.visibility="visible";
			else
				document.getElementById('button2').innerHTML="Result";
		}               
	}
}
};
var flag4=0;
var ans_5=1.25;
document.getElementById('button3').onclick=function() {
	if(document.getElementById('output3').value=="")
	{
		if(document.getElementById('button3').innerHTML==="Result"){
			document.getElementById('output3').value=1.25;
			document.getElementById('nextButton').style.visibility="visible";
			button('button3','wrong3');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output3').value==1.25)
			right_condition('button3','wrong3','right3','nextButton');
		else{
			flag4+=1;
			wrong_condition('output3','wrong3','right3');
			if (flag4===2){
			 if(document.getElementById('output3').value==1.25)
				document.getElementById('right3').style.visibility="visible";
			else
				document.getElementById('button3').innerHTML="Result";
		}               
	}
}
};

}


if (simsubscreennum==5)
{
 document.getElementById('c2').style.visibility="visible";
 document.getElementById('m-7').style.visibility="visible";
 document.getElementById('a1-4').style.visibility="hidden";
 document.getElementById('a1-5').style.visibility="visible";
 document.getElementById('a1-22').style.visibility="hidden";
 document.getElementById('a1-2').style.visibility="hidden";
 document.getElementById('a31-11').style.visibility="hidden";
 document.getElementById('a13-2').style.visibility="visible";
 document.getElementById('a31-22').style.visibility="hidden";
 document.getElementById('a30-2').style.visibility="visible";
 document.getElementById('a30-22').style.visibility="visible";
 document.getElementById('a51-11').style.visibility="visible";
 document.getElementById('a-21').style.visibility="visible";

 myInt = setInterval(function(){ animatearrow(); }, 500);
 animateArrowATPosition(150,200,20,180);
 document.getElementById('a-21').onclick=function() { step4(); };


}
if (simsubscreennum==6)
{
		document.getElementById('a6-12').style.visibility="hidden";

	document.getElementById('a1-5').style.visibility="hidden";
	document.getElementById('a51-111').style.visibility="hidden";
	document.getElementById('a5-2').style.visibility="hidden";
	document.getElementById('a13-2').style.visibility="hidden";
	document.getElementById('a-22').style.visibility="hidden";
	for(i=0;i<=data2[p].length-1;i++)
	{
		document.getElementById("row"+i).innerHTML=data2[p][i];
	}

	var flag11=0;
	var ans_2=1.5694;
	document.getElementById('button-1').onclick=function() {
		if(document.getElementById('output-1').value=="")
		{
			if(document.getElementById('button-1').innerHTML==="Result"){
				document.getElementById('output-1').value=3.0255;
				document.getElementById('button1-1').style.visibility="visible";
				button('button-1','wrong-1');
			}
			else
				alert("Enter the value to proceed");
		}
		else {
			if(document.getElementById('output-1').value==3.0255)
				right_condition('button-1','wrong-1','right-1','button1-1');
			else{
				flag11+=1;
				wrong_condition('output-1','wrong-1','right-1');
				if (flag11===2){
				 if(document.getElementById('output-1').value==3.0255)
					document.getElementById('right-1').style.visibility="visible";
				else
					document.getElementById('button-1').innerHTML="Result";
			}               
		}
	}
};

var flag22=0;
var ans_3=0.6259;
document.getElementById('button1-1').onclick=function() {
	if(document.getElementById('output1-1').value=="")
	{
		if(document.getElementById('button1-1').innerHTML==="Result"){
			document.getElementById('output1-1').value=3.651;
			document.getElementById('button2-1').style.visibility="visible";
			button('button1-1','wrong1-1');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output1-1').value==3.651)
			right_condition('button1-1','wrong1-1','right1-1','button2-1');
		else{
			flag22+=1;
			wrong_condition('output1-1','wrong1-1','right1-1');
			if (flag22===2){
			 if(document.getElementById('output1-1').value==3.651)
				document.getElementById('right1-1').style.visibility="visible";
			else
				document.getElementById('button1-1').innerHTML="Result";
		}               
	}
}
};
var flag33=0;
var ans_4=0.9389;
document.getElementById('button2-1').onclick=function() {
	if(document.getElementById('output2-1').value=="")
	{
		if(document.getElementById('button2-1').innerHTML==="Result"){
			document.getElementById('output2-1').value=1.46;
			document.getElementById('button3-1').style.visibility="visible";
			button('button2-1','wrong2-1');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output2-1').value==1.46)
			right_condition('button2-1','wrong2-1','right2-1','button3-1');
		else{
			flag33+=1;
			wrong_condition('output2-1','wrong2-1','right2-1');
			if (flag33===2){
			 if(document.getElementById('output2-1').value==1.46)
				document.getElementById('right2-1').style.visibility="visible";
			else
				document.getElementById('button2-1').innerHTML="Result";
		}               
	}
}
};
var flag44=0;
var ans_5=1.25;
document.getElementById('button3-1').onclick=function() {
	if(document.getElementById('output3-1').value=="")
	{
		if(document.getElementById('button3-1').innerHTML==="Result"){
			document.getElementById('output3-1').value=1.559;
			document.getElementById('button4-1').style.visibility="visible";
			button('button3-1','wrong3-1');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output3-1').value==1.559)
			right_condition('button3-1','wrong3-1','right3-1','button4-1');
		else{
			flag44+=1;
			wrong_condition('output3-1','wrong3-1','right3-1');
			if (flag44===2){
			 if(document.getElementById('output3-1').value==1.559)
				document.getElementById('right3-1').style.visibility="visible";
			else
				document.getElementById('button3-1').innerHTML="Result";
		}               
	}
}
};
var flag55=0;
var ans_5=1.4045;
document.getElementById('button4-1').onclick=function() {
	if(document.getElementById('output4-1').value=="")
	{
		if(document.getElementById('button4-1').innerHTML==="Result"){
			document.getElementById('output4-1').value=1.4045;
			document.getElementById('nextButton').style.visibility="visible";
			button('button4-1','wrong4-1');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output4-1').value==1.4045)
			right_condition('button4-1','wrong4-1','right4-1','nextButton');
		else{
			flag55+=1;
			wrong_condition('output4-1','wrong4-1','right4-1');
			if (flag55===2){
			 if(document.getElementById('output4-1').value==1.4045)
				document.getElementById('right4-1').style.visibility="visible";
			else
				document.getElementById('button4-1').innerHTML="Result";
		}               
	}
}
};
}

if (simsubscreennum==7)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(60,85,20,270);
	document.getElementById('b3').onclick=function() { stepp1(); };
}
if (simsubscreennum==8)
{
	
    document.getElementById('arrow2').style.visibility="hidden";
	document.getElementById('wind').style.visibility="hidden";
	document.getElementById('n9').style.visibility="hidden";
	document.getElementById('n10').style.visibility="hidden";
	document.getElementById('b2').style.visibility="hidden";
	document.getElementById('b5').style.visibility="hidden";
	document.getElementById('b6').style.visibility="hidden";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	animateArrowATPosition(750,150,20,720);
	document.getElementById('b12').onclick=function() { stepp2(); };
}
if (simsubscreennum==9)
	{
		 document.getElementById('ca-1').style.visibility="hidden";
		document.getElementById('ca-2').style.visibility="hidden";
		document.getElementById('ca-3').style.visibility="hidden";

				document.getElementById('b15').style.visibility="hidden";

		/* document.getElementById('11').style.visibility = "visible";
				document.getElementById('ok1').onclick = function() {
		document.getElementById('11').style.visibility = "hidden";
		document.getElementById('ok1').style.visibility = "hidden"; */
		 document.getElementById('can-1').style.visibility="visible";
				document.getElementById('can-2').style.visibility="visible";
		document.getElementById('can-3').style.visibility="visible";
		
		document.getElementById('n-1').style.visibility="visible";
				document.getElementById('n-2').style.visibility="visible";
		document.getElementById('n-5').style.visibility="visible";
				document.getElementById('b1-1').style.visibility="visible";
			document.getElementById('b1-11').style.visibility="visible";
		 
		 setTimeout(function()
		{
			document.getElementById('b2-1').style.visibility="visible";
			document.getElementById('b2-11').style.visibility="visible";
	 
		 document.getElementById('n-3').style.visibility="visible";
			document.getElementById('n-4').style.visibility="visible";

			document.getElementById('b1-4').style.visibility="visible";
			document.getElementById('b3-1').style.visibility="visible";

			setTimeout(function()
			{ 
			document.getElementById('c1').style.visibility="visible";
			    document.getElementById('m-6').style.visibility="visible";
	 
			
				document.getElementById('n-1').style.visibility="hidden";
				document.getElementById('n-2').style.visibility="hidden";
		document.getElementById('n-5').style.visibility="hidden";

				document.getElementById('can-1').style.visibility="hidden";
				document.getElementById('can-2').style.visibility="hidden";
		document.getElementById('can-3').style.visibility="hidden";

				document.getElementById('n-3').style.visibility="hidden";
				document.getElementById('n-4').style.visibility="hidden";
				document.getElementById('b1-21').style.visibility="visible";
				document.getElementById('b1-2').style.visibility="visible";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				animateArrowATPosition(150,200,20,180);
				document.getElementById('b1-21').onclick=function() { step33(); };
		},3000);
		},4000);
/* }; */
	}
if (simsubscreennum==10)
	{
	 document.getElementById('b1-1').style.visibility="hidden";
	 document.getElementById('b1-11').style.visibility="hidden";
	 document.getElementById('b2-1').style.visibility="hidden";
	 document.getElementById('b2-11').style.visibility="hidden";
	 document.getElementById('b1-4').style.visibility="hidden";
	 document.getElementById('b3-1').style.visibility="hidden";
	 document.getElementById('b1-2').style.visibility="hidden";
	 document.getElementById('b41-11').style.visibility="hidden";
	 document.getElementById('b1-22').style.visibility="hidden";
	 for(i=0;i<=data1[p].length-1;i++)
	 {
		document.getElementById("r"+i).innerHTML=data1[p][i];
	}
	var flag1_1=0;
	//var ans_2=1.5694;
	document.getElementById('button-11').onclick=function() {
		if(document.getElementById('output-11').value=="")
		{
			if(document.getElementById('button-11').innerHTML==="Result"){
				document.getElementById('output-11').value=3.755;
				document.getElementById('button1-11').style.visibility="visible";
				button('button-11','wrong-11');
			}
			else
				alert("Enter the value to proceed");
		}
		else {
			if(document.getElementById('output-11').value==3.755)
				right_condition('button-11','wrong-11','right-11','button1-11');
			else{
				flag1_1+=1;
				wrong_condition('output-11','wrong-11','right-11');
				if (flag1_1===2){
				 if(document.getElementById('output-11').value==3.755)
					document.getElementById('right-11').style.visibility="visible";
				else
					document.getElementById('button-11').innerHTML="Result";
			}               
		}
	}
};

var flag2_1=0;
//var ans_3=0.6259;
document.getElementById('button1-11').onclick=function() {
	if(document.getElementById('output1-11').value=="")
	{
		if(document.getElementById('button1-11').innerHTML==="Result"){
			document.getElementById('output1-11').value=0.938;
			document.getElementById('button2-11').style.visibility="visible";
			button('button1-11','wrong1-11');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output1-11').value==0.938)
			right_condition('button1-11','wrong1-11','right1-11','button2-11');
		else{
			flag2_1+=1;
			wrong_condition('output1-11','wrong1-11','right1-11');
			if (flag2_1===2){
			 if(document.getElementById('output1-11').value==0.938)
				document.getElementById('right1-11').style.visibility="visible";
			else
				document.getElementById('button1-11').innerHTML="Result";
		}               
	}
}
};
var flag3_1=0;
//var ans_4=0.9389;
document.getElementById('button2-11').onclick=function() {
	if(document.getElementById('output2-11').value=="")
	{
		if(document.getElementById('button2-11').innerHTML==="Result"){
			document.getElementById('output2-11').value=2.295;
			document.getElementById('button3-11').style.visibility="visible";
			button('button2-11','wrong2-11');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output2-11').value==2.295)
			right_condition('button2-11','wrong2-11','right2-11','button3-11');
		else{
			flag3_1+=1;
			wrong_condition('output2-11','wrong2-11','right2-11');
			if (flag3_1===2){
			 if(document.getElementById('output2-11').value==2.295)
				document.getElementById('right2-11').style.visibility="visible";
			else
				document.getElementById('button2-11').innerHTML="Result";
		}               
	}
}
};
var flag4_1=0;
//var ans_5=1.25;
document.getElementById('button3-11').onclick=function() {
	if(document.getElementById('output3-11').value=="")
	{
		if(document.getElementById('button3-11').innerHTML==="Result"){
			document.getElementById('output3-11').value=1.955;
			document.getElementById('nextButton').style.visibility="visible";
			button('button3-11','wrong3-11');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output3-11').value==1.955)
			right_condition('button3-11','wrong3-11','right3-11','nextButton');
		else{
			flag4_1+=1;
			wrong_condition('output3-11','wrong3-11','right3-11');
			if (flag4_1===2){
			 if(document.getElementById('output3-11').value==1.955)
				document.getElementById('right3-11').style.visibility="visible";
			else
				document.getElementById('button3-11').innerHTML="Result";
		}               
	}
}
};

}

if (simsubscreennum==11)
{
	document.getElementById('c2').style.visibility="visible";
 document.getElementById('m-7').style.visibility="visible";
 document.getElementById('b1-4').style.visibility="hidden";
 document.getElementById('b1-5').style.visibility="visible";

 document.getElementById('b1-22').style.visibility="hidden";
 document.getElementById('b1-2').style.visibility="hidden";
 document.getElementById('b31-11').style.visibility="hidden";
 document.getElementById('b13-2').style.visibility="visible";
 document.getElementById('b31-22').style.visibility="hidden";
 document.getElementById('b30-2').style.visibility="visible";
 document.getElementById('b30-22').style.visibility="visible";
 document.getElementById('b51-11').style.visibility="visible";
 document.getElementById('b-21').style.visibility="visible";

 myInt = setInterval(function(){ animatearrow(); }, 500);
 animateArrowATPosition(150,200,20,180);
 document.getElementById('b-21').onclick=function() { step44(); };
}
if (simsubscreennum==12)
{
		document.getElementById('b6-12').style.visibility="hidden";

	document.getElementById('b1-5').style.visibility="hidden";
	document.getElementById('b51-111').style.visibility="hidden";
	document.getElementById('b5-2').style.visibility="hidden";
	document.getElementById('b13-2').style.visibility="hidden";
	document.getElementById('b-22').style.visibility="hidden";
	for(i=0;i<=data2[p].length-1;i++)
	{
		document.getElementById("rw"+i).innerHTML=data2[p][i];
	}

	var flag11_1=0;
	//var ans_2=1.5694;
	document.getElementById('button-12').onclick=function() {
		if(document.getElementById('output-12').value=="")
		{
			if(document.getElementById('button-12').innerHTML==="Result"){
				document.getElementById('output-12').value=5.112;
				document.getElementById('button1-12').style.visibility="visible";
				button('button-12','wrong-12');
			}
			else
				alert("Enter the value to proceed");
		}
		else {
			if(document.getElementById('output-12').value==5.112)
				right_condition('button-12','wrong-12','right-12','button1-12');
			else{
				flag11_1+=1;
				wrong_condition('output-12','wrong-12','right-12');
				if (flag11_1===2){
				 if(document.getElementById('output-12').value==5.112)
					document.getElementById('right-12').style.visibility="visible";
				else
					document.getElementById('button-12').innerHTML="Result";
			}               
		}
	}
};

var flag22_1=0;
var ans_3=0.6259;
document.getElementById('button1-12').onclick=function() {
	if(document.getElementById('output1-12').value=="")
	{
		if(document.getElementById('button1-12').innerHTML==="Result"){
			document.getElementById('output1-12').value=2.503;
			document.getElementById('button2-12').style.visibility="visible";
			button('button1-12','wrong1-12');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output1-12').value==2.503)
			right_condition('button1-12','wrong1-12','right1-12','button2-12');
		else{
			flag22_1+=1;
			wrong_condition('output1-12','wrong1-12','right1-12');
			if (flag22_1===2){
			 if(document.getElementById('output1-12').value==2.503)
				document.getElementById('right1-12').style.visibility="visible";
			else
				document.getElementById('button1-12').innerHTML="Result";
		}               
	}
}
};
var flag33_1=0;
//var ans_4=0.9389;
document.getElementById('button2-12').onclick=function() {
	if(document.getElementById('output2-12').value=="")
	{
		if(document.getElementById('button2-12').innerHTML==="Result"){
			document.getElementById('output2-12').value=2.608;
			document.getElementById('button3-12').style.visibility="visible";
			button('button2-12','wrong2-12');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output2-12').value==2.608)
			right_condition('button2-12','wrong2-12','right2-12','button3-12');
		else{
			flag33_1+=1;
			wrong_condition('output2-12','wrong2-12','right2-12');
			if (flag33_1===2){
			 if(document.getElementById('output2-12').value==2.608)
				document.getElementById('right2-12').style.visibility="visible";
			else
				document.getElementById('button2-12').innerHTML="Result";
		}               
	}
}
};
var flag44_1=0;
//var ans_5=1.25;
document.getElementById('button3-12').onclick=function() {
	if(document.getElementById('output3-12').value=="")
	{
		if(document.getElementById('button3-12').innerHTML==="Result"){
			document.getElementById('output3-12').value=2.084;
			document.getElementById('button4-12').style.visibility="visible";
			button('button3-12','wrong3-12');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output3-12').value==2.084)
			right_condition('button3-12','wrong3-12','right3-12','button4-122');
		else{
			flag44_1+=1;
			wrong_condition('output3-12','wrong3-12','right3-12');
			if (flag44_1===2){
			 if(document.getElementById('output3-12').value==2.084)
				document.getElementById('right3-12').style.visibility="visible";
			else
				document.getElementById('button3-12').innerHTML="Result";
		}               
	}
}
};
var flag55_1=0;
//var ans_5=1.4045;
document.getElementById('button4-12').onclick=function() {
	if(document.getElementById('output4-12').value=="")
	{
		if(document.getElementById('button4-12').innerHTML==="Result"){
			document.getElementById('output4-12').value=2.0195;
			document.getElementById('nextButton').style.visibility="visible";
			button('button4-12','wrong4-12');
		}
		else
			alert("Enter the value to proceed");
	}
	else {
		if(document.getElementById('output4-12').value==2.0195)
			right_condition('button4-12','wrong4-12','right4-12','nextButton');
		else{
			flag55_1+=1;
			wrong_condition('output4-12','wrong4-12','right4-12');
			if (flag55_1===2){
			 if(document.getElementById('output4-12').value==2.0195)
				document.getElementById('right4-12').style.visibility="visible";
			else
				document.getElementById('button4-12').innerHTML="Result";
		}               
	}
}
};
}

}

function step1()
{
 myStopFunction();
 document.getElementById('a3').onclick="";
 document.getElementById("a3").style.animation = "mover 1s ease-in-out  forwards";
 setTimeout(function()
 {
	 myInt = setInterval(function(){ animatearrow(); }, 500);
	 animateArrowATPosition(213,280,20,720);
 },1000);
 document.getElementById("a4").onclick=function() {step1_11();};
}

function step1_11()
{
myStopFunction();
	document.getElementById("a4").onclick="";
	
		document.getElementById('a01').style.visibility="visible";

  // setTimeout(function()
  // {
  	
  	// myStopFunction();
  	myInt = setInterval(function(){ animatearrow(); }, 500);
	  animateArrowATPosition(210,260,20,720);
  	 document.getElementById("a01").onclick=function() { 
  	myStopFunction();
	  document.getElementById("a01").style.animation = "movecc 1s ease-in-out forwards";
	   setTimeout(function()
     {
      	document.getElementById('a01').style.visibility="hidden";
      	document.getElementById('m7').style.opacity='1';
			  document.getElementById('m8').style.opacity='1';
	      document.getElementById('a5').style.visibility="visible";
	      document.getElementById('a6').style.visibility="visible";
	      document.getElementById("a6").style.animation = "moven 1s ease-in-out forwards";
			  setTimeout(function()
				{
			  document.getElementById("a6").style.animation = "moven 1s ease-in-out forwards";
	 			 setTimeout(function()
				 {
				 document.getElementById('m9').style.visibility="visible";
				 document.getElementById('m10').style.visibility="visible";
				 document.getElementById('a2').style.visibility="visible";
				 document.getElementById('arrow2').style.visibility="visible";
				 document.getElementById('wind').style.visibility="visible";

			  initiate(); //This function will position those 6 divs in the required place. This function needs to be called before 'rt(n)' function.
			  rt(10); 
			  setTimeout(function()
			  {
				 document.getElementById('nextButton').style.visibility="visible"; 
			  },6000);
	 	    },1300);
   	    },500);
    },1500);
 	
};
	 

}

function step2()
{
	myStopFunction();
	document.getElementById('a12').onclick="";
	document.getElementById("a12").style.animation = "moves 2s ease-in-out forwards";
	setTimeout(function()
	{
		document.getElementById('a13').style.visibility="visible";
		document.getElementById('c13').style.visibility="visible";
		setTimeout(function()
		{
			fillTable(0);
			setTimeout(function()
			{
				document.getElementById('a13').style.visibility="hidden";
				document.getElementById('c13').style.visibility="hidden";
				document.getElementById("a12").style.animation = "movess 2s ease-in-out forwards";
				setTimeout(function()
				{
					document.getElementById('a14').style.visibility="visible";
					document.getElementById('c14').style.visibility="visible";
					setTimeout(function()
					{
						fillTable(1);
						setTimeout(function()
						{
							document.getElementById('a14').style.visibility="hidden";
							document.getElementById('c14').style.visibility="hidden";

							document.getElementById("a12").style.animation = "movese 2s ease-in-out forwards";
							setTimeout(function()
							{
								document.getElementById('a15').style.visibility="visible";
								document.getElementById('c15').style.visibility="visible";

								setTimeout(function()
								{
									fillTable(2);
									setTimeout(function()
								{
					            document.getElementById('ca-1').style.visibility="visible";
					            document.getElementById('ca-2').style.visibility="visible";
					            document.getElementById('ca-3').style.visibility="visible";

					            setTimeout(function()
							  	 {
							  	    document.getElementById('c15').style.visibility="hidden";
					                document.getElementById('a11').style.visibility="hidden";
									document.getElementById('a12').style.visibility="hidden";
									document.getElementById('a15').style.visibility="hidden";
				        	        validateAnswer(0, 0, "150px", "150px");
				        	     },800);
								 },800);
								},800);
							},2000);
						},2000);
					},800);
				},2000);
			},2000);
		},800);
	},2000);
}
function step3()
{
	myStopFunction();
	 document.getElementById('a1-21').onclick="";
	 document.getElementById('c1').style.visibility="hidden";
	document.getElementById('m-6').style.visibility="hidden";
	 
	document.getElementById("a1-21").style.animation = "movehand1 1s ease-in-out  forwards";
	setTimeout(function()
	{
		document.getElementById("a1-2").style.animation = "movep 1s ease-in-out  forwards";
		document.getElementById("a1-21").style.animation = "movehand11 1s ease-in-out forwards";
		setTimeout(function()
		{
		 document.getElementById('Sample1').style.visibility="visible";
         setTimeout(function()
		    {
			document.getElementById('Sample1').style.visibility="hidden";
			document.getElementById('a1-21').style.visibility="hidden";
			document.getElementById("a2-2").style.animation = "sample 5s ease-in-out  forwards";
			document.getElementById("a2-22").style.animation = "sample10 5s ease-in-out  forwards";
			setTimeout(function()
			{
				document.getElementById('a3-2').style.visibility="visible";
				 myInt = setInterval(function(){ animatearrow(); }, 500);
	             animateArrowATPosition(45,370,30,180);
  	             document.getElementById("a3-2").onclick=function() { 
  	             myStopFunction();
				document.getElementById("a3-2").style.animation = "movehand12 1s ease-in-out  forwards";
				document.getElementById("a3-1").style.animation = "movebox 1s ease-in-out  forwards";
				setTimeout(function()
				{
				 document.getElementById('a3-2').style.visibility="hidden";
				 document.getElementById('para').innerHTML="Static Head:";
				 document.getElementById('para1').innerHTML="Left Limb Reading="+data1[p][0]+" cm";
				 setTimeout(function()
				 {
					document.getElementById('a3-1').style.visibility="hidden"; 
					document.getElementById('a4-1').style.visibility="visible";
					setTimeout(function()
					{
					 document.getElementById('a41-22').style.visibility="visible";
					 myInt = setInterval(function(){ animatearrow(); }, 500);
	                 animateArrowATPosition(45,370,30,180);
  	                 document.getElementById("a41-22").onclick=function() { 
  	                 myStopFunction();
					 document.getElementById("a41-22").style.animation = "movehand13 1s ease-in-out  forwards";
					 document.getElementById("a4-1").style.animation = "movebox1 1s ease-in-out  forwards";
					 setTimeout(function()
					 {
						 document.getElementById('a41-22').style.visibility="hidden";
						 document.getElementById('para2').innerHTML="Right Limb Reading="+data1[p][1]+" cm";
						 document.getElementById('para3').innerHTML="Diffrence="+data1[p][2]+" cm";
						 setTimeout(function()
						 {
							 document.getElementById('a4-1').style.visibility="hidden";
							 document.getElementById('para').style.visibility="hidden";
							 document.getElementById('para1').style.visibility="hidden";
							 document.getElementById('para2').style.visibility="hidden";
							 document.getElementById('para3').style.visibility="hidden";
							 document.getElementById('a2-2').style.visibility="hidden";
							 document.getElementById('a2-22').style.visibility="hidden";
							 document.getElementById('a1-2').style.visibility="hidden";
							 document.getElementById('a22-2').style.visibility="visible";
							 document.getElementById('a22-22').style.visibility="visible";
							 document.getElementById('a1-22').style.visibility="visible";
							 document.getElementById('a3-11').style.visibility="visible";
							 document.getElementById('a1-23').style.visibility="visible";
							 myInt = setInterval(function(){ animatearrow(); }, 500);
							 animateArrowATPosition(340,170,20,-90);
							 document.getElementById("a1-23").onclick=function() {
								myStopFunction();
								document.getElementById("a1-23").onclick="";
								document.getElementById("a1-23").style.animation = "movehand2 1s ease-in-out forwards";
								setTimeout(function()
								{
									document.getElementById("a1-22").style.animation = "movepp 1s ease-in-out forwards";
									document.getElementById("a1-23").style.animation = "movehand22 1s ease-in-out forwards";
									setTimeout(function()
									{
							        document.getElementById('Sample2').style.visibility="visible";
										setTimeout(function()
									   {
									    document.getElementById('Sample2').style.visibility="hidden";
										document.getElementById('a1-23').style.visibility="hidden";
										document.getElementById("a22-2").style.animation = "sample 5s ease-in-out  forwards";
										document.getElementById("a22-22").style.animation = "sample10 5s ease-in-out forwards";
										setTimeout(function()
										{
											document.getElementById('a3-22').style.visibility="visible";
											myInt = setInterval(function(){ animatearrow(); }, 500);
	         						        animateArrowATPosition(45,370,30,180);
  	       						            document.getElementById("a3-22").onclick=function() { 
  	       						            myStopFunction();
											document.getElementById("a3-22").style.animation = "movehand12 1s ease-in-out  forwards";
											document.getElementById("a3-11").style.animation = "movebox 1s ease-in-out  forwards";
											setTimeout(function()
											{
											document.getElementById('a3-22').style.visibility="hidden";
											document.getElementById('paraa').innerHTML="Total Head:";
											document.getElementById('para11').innerHTML="Left Limb Reading="+data1[p][3]+" cm";
										    setTimeout(function()
										    {
											 document.getElementById('a3-11').style.visibility="hidden";
											 document.getElementById('a4-11').style.visibility="visible";
											 setTimeout(function()
											 {
											 document.getElementById('a4-22').style.visibility="visible";
                                             myInt = setInterval(function(){ animatearrow(); }, 500);
	         						         animateArrowATPosition(45,370,30,180);
  	       						             document.getElementById("a4-22").onclick=function() { 
  	       						             myStopFunction();

												document.getElementById("a4-22").style.animation = "movehand13 1s ease-in-out  forwards";
												document.getElementById("a4-11").style.animation = "movebox1 1s ease-in-out forwards";
												setTimeout(function()
												{
												document.getElementById('a4-22').style.visibility="hidden";
												document.getElementById('para22').innerHTML="Right Limb Reading="+data1[p][4]+"cm";
												document.getElementById('para33').innerHTML="Diffrence="+data1[p][5]+"cm";
												setTimeout(function()
												{
												document.getElementById('a4-11').style.visibility="hidden";
												document.getElementById('paraa').style.visibility="hidden";
												document.getElementById('para11').style.visibility="hidden";
												document.getElementById('para22').style.visibility="hidden";
												document.getElementById('para33').style.visibility="hidden";
												document.getElementById('a22-2').style.visibility="hidden";
												document.getElementById('a22-22').style.visibility="hidden";
												document.getElementById('a3-11').style.visibility="hidden";
												document.getElementById('a1-2').style.visibility="visible";
												document.getElementById('a21-2').style.visibility="visible";
												document.getElementById('a21-22').style.visibility="visible";
												document.getElementById('a31-11').style.visibility="visible";
												setTimeout(function()
												{
												document.getElementById('Sample3').style.visibility="visible";
												setTimeout(function()
												{
												document.getElementById('Sample3').style.visibility="hidden";

												document.getElementById("a21-2").style.animation = "sample 5s ease-in-out forwards";
												document.getElementById("a21-22").style.animation = "sample10 5s ease-in-out forwards";
												setTimeout(function()
												{
												document.getElementById('a31-22').style.visibility="visible";
                        
                                                myInt = setInterval(function(){ animatearrow(); }, 500);
	         						            animateArrowATPosition(45,370,30,180);
  	       						                document.getElementById("a31-22").onclick=function() { 
  	       						                myStopFunction();
												document.getElementById("a31-22").style.animation = "movehand12 1s ease-in-out forwards";
												document.getElementById("a31-11").style.animation = "movebox 1s ease-in-out forwards";
												setTimeout(function()
												{               
												document.getElementById('a31-22').style.visibility="hidden";
												document.getElementById('para0').innerHTML="Velocity Head:";
												document.getElementById('para11-1').innerHTML="Left Limb Reading="+data1[p][6]+" cm";
												setTimeout(function()
												{
												document.getElementById('a31-11').style.visibility="hidden";
												document.getElementById('a41-11').style.visibility="visible";
												setTimeout(function()
												{
												document.getElementById('a4-2').style.visibility="visible";
                                                myInt = setInterval(function(){ animatearrow(); }, 500);
	         						            animateArrowATPosition(45,370,30,180);
  	       						                document.getElementById("a4-2").onclick=function() { 
  	       						                myStopFunction();
												document.getElementById("a4-2").style.animation = "movehand13 1s ease-in-out forwards";
												document.getElementById("a41-11").style.animation = "movebox1 1s ease-in-out forwards";
												setTimeout(function()
												{
												document.getElementById('a4-2').style.visibility="hidden";
												document.getElementById('para22-1').innerHTML="Right Limb Reading="+data1[p][7]+" cm";
												document.getElementById('para33-1').innerHTML="Diffrence="+data1[p][8]+"cm";
												document.getElementById('nextButton').style.visibility="visible";
												},2000);
											   }
											 },2000);
											},2000);
										  },2000);
										 }
										},5000)
									   },3500);
									  },1000);							 
									},3000); 
								  },2000);
								 }
								},2000);
							  },2000);
							},2000);
						  }        
						},6000);
					  },3500);
				    },1000);
				  },1000);
			    };
			  },2000);
			},2000);
           }
		  },2000);
		},2000); 
	  },2000); 
    }

		},6000);
		},3500);
	 },2000);
	},1000);
}

function step4()
{
	myStopFunction();
	 document.getElementById('a-21').onclick="";
	document.getElementById('c2').style.visibility="hidden";
    document.getElementById('m-7').style.visibility="hidden";

	document.getElementById('a-21').style.visibility="visible";
	document.getElementById("a-21").style.animation = "movehand011 1s ease-in-out forwards";
	setTimeout(function()
	{
		document.getElementById("a13-2").style.animation = "movep1 1s ease-in-out forwards";
		document.getElementById("a-21").style.animation = "movehand01 1s ease-in-out forwards";
		setTimeout(function()
		{
		 document.getElementById('Sample1').style.visibility="visible";
		setTimeout(function()
		{
		    document.getElementById('Sample1').style.visibility="hidden";
			document.getElementById('a-21').style.visibility="hidden";
			document.getElementById("a30-2").style.animation = "sample1 5s ease-in-out forwards";
			document.getElementById("a30-22").style.animation = "sample11 5s ease-in-out forwards";
			setTimeout(function()
			{
			 document.getElementById('a51-11').style.visibility="visible";
			 document.getElementById('a51-22').style.visibility="visible"; 
            myInt = setInterval(function(){ animatearrow(); }, 500);
	        animateArrowATPosition(45,370,30,180);
  	        document.getElementById("a51-22").onclick=function() { 
  	        myStopFunction();
			 document.getElementById("a51-22").style.animation = "movehand21 1s ease-in-out forwards";
			 document.getElementById("a51-11").style.animation = "movebox2 1s ease-in-out forwards";
			 setTimeout(function()
			 {
				 document.getElementById('a51-22').style.visibility="hidden";
				 document.getElementById('para-1').innerHTML="Static Head:";
				 document.getElementById('para1-1').innerHTML="Left Limb Reading="+data2[p][0]+" cm";
				 setTimeout(function()
				 {
					document.getElementById('a51-11').style.visibility="hidden"; 
					document.getElementById('a5-11').style.visibility="hidden"; 
					document.getElementById('a6-11').style.visibility="visible";
					setTimeout(function()
					{
					 document.getElementById('a61-22').style.visibility="visible";
                     myInt = setInterval(function(){ animatearrow(); }, 500);
	                 animateArrowATPosition(45,370,30,180);
  	                 document.getElementById("a61-22").onclick=function() { 
  	                 myStopFunction();
					 document.getElementById("a61-22").style.animation = "movehand23 1s ease-in-out forwards";
					 document.getElementById("a6-11").style.animation = "movebox3 1s ease-in-out forwards";
					 setTimeout(function()
					 {
						 document.getElementById('a61-22').style.visibility="hidden";
						 document.getElementById('para2-1').innerHTML="Right Limb Reading="+data2[p][1]+" cm";
						 document.getElementById('para3-1').innerHTML="Diffrence="+data2[p][2]+"cm";
						 setTimeout(function()
						 {
							 document.getElementById('a6-11').style.visibility="hidden";
							 document.getElementById('a13-2').style.visibility="hidden";
							 document.getElementById('a30-22').style.visibility="hidden";
							 document.getElementById('a30-2').style.visibility="hidden";
							 document.getElementById('a51-22').style.visibility="hidden";
							 document.getElementById('a51-11').style.visibility="hidden";
							 document.getElementById('a34-22').style.visibility="visible";
							 document.getElementById('a34-2').style.visibility="visible";
							 document.getElementById('a5-11').style.visibility="visible";
							 document.getElementById('para-1').style.visibility="hidden";
							 document.getElementById('para1-1').style.visibility="hidden";
							 document.getElementById('para2-1').style.visibility="hidden";
							 document.getElementById('para3-1').style.visibility="hidden";
							 setTimeout(function()
							 {
								 document.getElementById('a30-22').style.visibility="hidden";
								 document.getElementById('a30-2').style.visibility="hidden";
								 setTimeout(function()
								 {
									document.getElementById('a-22').style.visibility="visible";
									document.getElementById('a-23').style.visibility="visible";
									myInt = setInterval(function(){ animatearrow(); }, 500);
									animateArrowATPosition(370,80,20,360);
									document.getElementById("a-23").onclick=function() {
										myStopFunction();
										document.getElementById("a-23").onclick="";
										document.getElementById("a-22").style.animation = "movep2 1s ease-in-out forwards";
										document.getElementById("a-23").style.animation = "movehand02 1s ease-in-out forwards";
										setTimeout(function()
										{
											document.getElementById("a34-2").style.animation = "sample1 5s ease-in-out forwards";
											document.getElementById("a34-22").style.animation = "sample01 5s ease-in-out forwards";
											document.getElementById('a-23').style.visibility="hidden";
											setTimeout(function()
											{
												document.getElementById('a5-22').style.visibility="visible";
												myInt = setInterval(function(){ animatearrow(); }, 500);
	                                            animateArrowATPosition(45,370,30,180);
  	                                            document.getElementById("a5-22").onclick=function() { 
  	                                            myStopFunction();
												document.getElementById("a5-22").style.animation = "movehand21 1s ease-in-out forwards";
												document.getElementById("a5-11").style.animation = "movebox2 1s ease-in-out forwards";
												setTimeout(function()
												{
												 document.getElementById('a5-22').style.visibility="hidden";
												 document.getElementById('a5-11').style.visibility="hidden";
												 document.getElementById('a51-111').style.visibility="visible";
												 document.getElementById('paraa-1').innerHTML="Total Head:";
												 document.getElementById('para10-1').innerHTML="Left Limb Reading="+data2[p][3]+"cm";
												 setTimeout(function()
												 {
													 document.getElementById('a5-2').style.visibility="visible";
													 myInt = setInterval(function(){ animatearrow(); }, 500);
	                                                 animateArrowATPosition(45,370,30,180);
  	                                                 document.getElementById("a5-2").onclick=function() { 
  	                                                 myStopFunction();
													 document.getElementById("a5-2").style.animation = "movehand33 1s ease-in-out forwards";
													 document.getElementById("a51-111").style.animation = "movebox33 1s ease-in-out forwards";

													 setTimeout(function()
													 {
													 document.getElementById('a5-2').style.visibility="hidden";
													 document.getElementById('para20-1').innerHTML="Right Limb Reading="+data2[p][4]+" cm";
													 document.getElementById('para30-1').innerHTML="Diffrence="+data2[p][5]+"cm";

													 setTimeout(function()
													 {
													 document.getElementById('a51-111').style.visibility="hidden";
													 document.getElementById('a5-2').style.visibility="hidden";
													 document.getElementById('a5-11').style.visibility="hidden";
													 document.getElementById('a35-2').style.visibility="visible";
													 document.getElementById('a35-22').style.visibility="visible"; 
													 document.getElementById('a61-111').style.visibility="visible";
													 document.getElementById('a13-2').style.visibility="visible";
													 document.getElementById('paraa-1').style.visibility="hidden";
													 document.getElementById('para10-1').style.visibility="hidden";
													 document.getElementById('para20-1').style.visibility="hidden";
													 document.getElementById('para30-1').style.visibility="hidden";
													 document.getElementById('a34-2').style.visibility="hidden";
													 document.getElementById('a30-2').style.visibility="hidden";
                                                     setTimeout(function()
												    {
												    document.getElementById('Sample3').style.visibility="visible";
                                                    setTimeout(function()
												    {
													document.getElementById('Sample3').style.visibility="hidden";

													 document.getElementById("a35-2").style.animation = "sample 5s ease-in-out forwards";
													 document.getElementById("a35-22").style.animation = "sample10 5s ease-in-out forwards";
													 setTimeout(function()
													 {
													 document.getElementById('a6-2').style.visibility="visible";
													  myInt = setInterval(function(){ animatearrow(); }, 500);
	                                                 animateArrowATPosition(45,370,30,180);
  	                                                 document.getElementById("a6-2").onclick=function() { 
  	                                                 myStopFunction();
													 document.getElementById("a6-2").style.animation = "movehand12 1s ease-in-out forwards";
													 document.getElementById("a61-111").style.animation = "movebox 1s ease-in-out forwards";
													 setTimeout(function()
													 {    
													 document.getElementById('para0-1').innerHTML="Velocity Head:";
													 document.getElementById('para11-2').innerHTML="Left Limb Reading="+data2[p][6]+" cm";
													 setTimeout(function()
													 {
													 document.getElementById('a6-12').style.visibility="visible";
													 document.getElementById('a61-111').style.visibility="hidden";

													 document.getElementById('a6-2').style.visibility="hidden";
													 setTimeout(function()
													 {
													document.getElementById('a6-22').style.visibility="visible";

													 myInt = setInterval(function(){ animatearrow(); }, 500);
	                                                 animateArrowATPosition(45,370,30,180);
  	                                                 document.getElementById("a6-22").onclick=function() { 
  	                                                 myStopFunction();
													 
													 document.getElementById("a6-22").style.animation = "movehand13 1s ease-in-out forwards";
													 document.getElementById("a6-12").style.animation = "movebox1 1s ease-in-out forwards";
													 setTimeout(function()
													 {
													 document.getElementById('a6-22').style.visibility="hidden";
													 document.getElementById('para22-2').innerHTML="Right Limb Reading="+data2[p][7]+" cm";
													 document.getElementById('para33-2').innerHTML="Diffrence="+data2[p][8]+"cm";
													 document.getElementById('nextButton').style.visibility="visible";
													 },3000);
											         }
													},3000);
												 },3500);
												},5500);
													 }
											 },7000);
											},6000); 
											},1000); 
											},1000); 
										 },4000);
										}
										},3000); 
									 },3000);
									 }
									},5000);
								 },3500);
								};
							 },3500);
							},1500);
						 },3000); 
						},2000);
					}
					 },3000);
					  
					},2000);
				 },2000);
			 }
				},6000);
			 },3000);
			  },1000);
			},3000);
		 }

function initiate() {
			var img=document.getElementById('a2'); //Replace 'image' by the id of the image in your file.
			//Don't change anything after this.
			//var pos=img.getBoundingClientRect();
			var l=590.5;
			var t=250;
			var m1=document.getElementById('m1');
			m1.style.top=(t+6)+'px'; m1.style.left=(l+2)+'px';
			document.getElementById('m2').style.top=(t+41)+'px';
			document.getElementById('m2').style.left=(l+2)+'px';
			document.getElementById('m3').style.top=(t+77)+'px';
			document.getElementById('m3').style.left=(l+5)+'px';
			document.getElementById('m4').style.top=(t+127)+'px';
			document.getElementById('m4').style.left=(l+11)+'px';
			document.getElementById('m5').style.top=(t+194)+'px';
			document.getElementById('m5').style.left=(l+19)+'px';
			document.getElementById('m6').style.top=(t+222)+'px';
			document.getElementById('m6').style.left=(l+25)+'px';
		}
		function rt(n){
			var t=200;
			while(n){
				for(let i=6;i>0;i--){
					blink(i,t);
					t+=100;
				}
				n--;
			}
		}
		function blink(i,t){
			setTimeout(function(){document.getElementById('m'+i).style.opacity='1';},t);
			setTimeout(function(){document.getElementById('m'+i).style.opacity='0';},t+200);
		}

	function initiate1() {
			var img=document.getElementById('b2'); //Replace 'image' by the id of the image in your file.
			//Don't change anything after this.
			//var pos=img.getBoundingClientRect();
			var l1=590.5;
			var t1=250;
		 /// console.log(l,t);
		 var n1=document.getElementById('n1');
		 n1.style.top=(t1+6)+'px'; n1.style.left=(l1+2)+'px';
		 document.getElementById('n6').style.top=(t1+222)+'px';
		 document.getElementById('n6').style.left=(l1+25)+'px';
		 document.getElementById('n5').style.top=(t1+194)+'px';
		 document.getElementById('n5').style.left=(l1+19)+'px';
		 document.getElementById('n4').style.top=(t1+127)+'px';
		 document.getElementById('n4').style.left=(l1+11)+'px';
		 document.getElementById('n3').style.top=(t1+77)+'px';
		 document.getElementById('n3').style.left=(l1+5)+'px';
		 document.getElementById('n2').style.top=(t1+41)+'px';
		 document.getElementById('n2').style.left=(l1+2)+'px';
		 
	 }
	 function rt1(n){
		var tx=200;
		while(n){
			for(let i=6;i>0;i--){
				blink1(i,tx);
				tx+=100;
			}
			n--;
		}
	}
	function blink1(i,tx){
		setTimeout(function(){document.getElementById('n'+i).style.opacity='1';},tx);
		setTimeout(function(){document.getElementById('n'+i).style.opacity='0';},tx+200);
	}

		function stepp1()
		{
		 myStopFunction();
		 document.getElementById('b3').onclick="";

		 document.getElementById("b3").style.animation = "mover 1s forwards";
		 setTimeout(function()
		 {
			 myInt = setInterval(function(){ animatearrow(); }, 500);
			 animateArrowATPosition(210,280,20,720);
		 },1000);
		 document.getElementById("b4").onclick=function() {stepp1_11();};
	 }


function stepp1_11()
{
myStopFunction();
	document.getElementById("b4").onclick="";
	
		document.getElementById('b01').style.visibility="visible";

  // setTimeout(function()
  // {
  	
  	// myStopFunction();
  	myInt = setInterval(function(){ animatearrow(); }, 500);
	  animateArrowATPosition(210,260,20,720);
  	 document.getElementById("b01").onclick=function() { 
  	myStopFunction();
	  document.getElementById("b01").style.animation = "movecc 1s ease-in-out forwards";
	   setTimeout(function()
     {
      	document.getElementById('b01').style.visibility="hidden";
      	document.getElementById('n7').style.opacity='1';
			  document.getElementById('n8').style.opacity='1';
	      document.getElementById('b5').style.visibility="visible";
	      document.getElementById('b6').style.visibility="visible";
			  setTimeout(function()
				{
			  document.getElementById("b6").style.animation = "movenn 1s ease-in-out forwards";
	 			 setTimeout(function()
				 {
				 document.getElementById('n9').style.visibility="visible";
				 document.getElementById('n10').style.visibility="visible";
				 document.getElementById('b2').style.visibility="visible";
                 document.getElementById('arrow2').style.visibility="visible";
				 document.getElementById('wind').style.visibility="visible";

			  initiate1(); //This function will position those 6 divs in the required place. This function needs to be called before 'rt(n)' function.
			  rt1(10); 
			  setTimeout(function()
			  {
				 document.getElementById('nextButton').style.visibility="visible"; 
			  },6000);
	 	    },1300);
   	    },500);
    },1500);
 	
};
	 

}

	 /* function stepp1_11()
	 {
		myStopFunction();

	 document.getElementById("b4").onclick="";
		document.getElementById('n7').style.opacity='1';
		document.getElementById('n8').style.opacity='1';
		document.getElementById('b5').style.visibility="visible";
		document.getElementById('b6').style.visibility="visible";
		setTimeout(function()
		{
		 document.getElementById("b6").style.animation = "movenn 1s forwards";
		 setTimeout(function()
		 {
			document.getElementById('n9').style.visibility="visible";
			document.getElementById('n10').style.visibility="visible";
			document.getElementById('b2').style.visibility="visible";

		 initiate1(); //This function will position those 6 divs in the required place. This function needs to be called before 'rt(n)' function.
		 rt1(10); 
		 setTimeout(function()
		 {/* 
		 document.getElementById('b66').style.visibility="hidden";
		document.getElementById('b2').style.visibility="hidden";
		document.getElementById('n9').style.visibility="hidden"; */
		//document.getElementById('nextButton').style.visibility="visible";
/*         validateAnswer(1, 2, "150px", "350px");
 */   /*  },6000);
	 },1300);
	 },500);

	} */
 
	function stepp2()
{
	myStopFunction();
	document.getElementById('b12').onclick="";
	document.getElementById("b12").style.animation = "moves 2s ease-in-out forwards";
	setTimeout(function()
	{
		document.getElementById('b13').style.visibility="visible";
		document.getElementById('c13').style.visibility="visible";
		setTimeout(function()
		{
			fillTable1(0);
			setTimeout(function()
			{
				document.getElementById('b13').style.visibility="hidden";
				document.getElementById('c13').style.visibility="hidden";
				document.getElementById("b12").style.animation = "movess 2s ease-in-out forwards";
				setTimeout(function()
				{
					document.getElementById('b14').style.visibility="visible";
					document.getElementById('c14').style.visibility="visible";
					setTimeout(function()
					{
						fillTable1(1);
						setTimeout(function()
						{
							document.getElementById('b14').style.visibility="hidden";
							document.getElementById('c14').style.visibility="hidden";

							document.getElementById("b12").style.animation = "movese 2s ease-in-out forwards";
							setTimeout(function()
							{
								document.getElementById('b15').style.visibility="visible";
								document.getElementById('c15').style.visibility="visible";

								setTimeout(function()
								{
									fillTable1(2);
									setTimeout(function()
								{
								document.getElementById('ca-1').style.visibility="visible";
								document.getElementById('ca-2').style.visibility="visible";
								document.getElementById('ca-3').style.visibility="visible";

					            setTimeout(function()
							  	 {
							  	    document.getElementById('c15').style.visibility="hidden";
					                document.getElementById('b11').style.visibility="hidden";
									document.getElementById('b12').style.visibility="hidden";
									document.getElementById('b15').style.visibility="hidden";
				        	        validateAnswer(0, 0, "150px", "150px");
				        	     },800);
								 },800);
								},800);
							},2000);
						},2000);
					},800);
				},2000);
			},2000);
		},800);
	},2000);
}

	function step33()
{
	myStopFunction();
	 document.getElementById('b1-21').onclick="";
	 document.getElementById('c1').style.visibility="hidden";
	document.getElementById('m-6').style.visibility="hidden";
	 
	document.getElementById("b1-21").style.animation = "movehand1 1s ease-in-out  forwards";
	setTimeout(function()
	{
		document.getElementById("b1-2").style.animation = "movep 1s ease-in-out  forwards";
		document.getElementById("b1-21").style.animation = "movehand11 1s ease-in-out forwards";

		setTimeout(function()
		{
			document.getElementById('Sample1').style.visibility="visible";
         setTimeout(function()
		{
			document.getElementById('Sample1').style.visibility="hidden";
			document.getElementById('b1-21').style.visibility="hidden";
			document.getElementById("b2-2").style.animation = "sample12 5s ease-in-out  forwards";
			document.getElementById("b2-22").style.animation = "sample11 5s ease-in-out  forwards";
			setTimeout(function()
			{
				document.getElementById('b3-2').style.visibility="visible";
				 myInt = setInterval(function(){ animatearrow(); }, 500);
	             animateArrowATPosition(45,370,30,180);
  	             document.getElementById("b3-2").onclick=function() { 
  	             myStopFunction();
				document.getElementById("b3-2").style.animation = "movehand24 1s ease-in-out  forwards";
				document.getElementById("b3-1").style.animation = "movebox4 1s ease-in-out  forwards";
				setTimeout(function()
				{
				 document.getElementById('b3-2').style.visibility="hidden";
				 document.getElementById('par').innerHTML="Static Head:";
				 document.getElementById('par1').innerHTML="Left Limb Reading="+data3[p][0]+" cm";
				 setTimeout(function()
				 {
					document.getElementById('b3-1').style.visibility="hidden"; 
					document.getElementById('b4-1').style.visibility="visible";
					setTimeout(function()
					{
					 document.getElementById('b41-22').style.visibility="visible";
					 myInt = setInterval(function(){ animatearrow(); }, 500);
	                 animateArrowATPosition(45,370,30,180);
  	                 document.getElementById("b41-22").onclick=function() { 
  	                 myStopFunction();
					 document.getElementById("b41-22").style.animation = "movehand23 1s ease-in-out  forwards";
					 document.getElementById("b4-1").style.animation = "movebox3 1s ease-in-out  forwards";
					 setTimeout(function()
					 {
						 document.getElementById('b41-22').style.visibility="hidden";
						 document.getElementById('par2').innerHTML="Right Limb Reading="+data3[p][1]+" cm";
						 document.getElementById('par3').innerHTML="Diffrence="+data3[p][2]+" cm";
						 setTimeout(function()
						 {
							 document.getElementById('b4-1').style.visibility="hidden";
							 document.getElementById('par').style.visibility="hidden";
							 document.getElementById('par1').style.visibility="hidden";
							 document.getElementById('par2').style.visibility="hidden";
							 document.getElementById('par3').style.visibility="hidden";
							 document.getElementById('b2-2').style.visibility="hidden";
							 document.getElementById('b2-22').style.visibility="hidden";
							 document.getElementById('b1-2').style.visibility="hidden";
							 document.getElementById('b22-2').style.visibility="visible";
							 document.getElementById('b22-22').style.visibility="visible";
							 document.getElementById('b1-22').style.visibility="visible";
							 document.getElementById('b3-11').style.visibility="visible";
							 document.getElementById('b1-23').style.visibility="visible";
							 myInt = setInterval(function(){ animatearrow(); }, 500);
							 animateArrowATPosition(340,170,20,-90);
							 document.getElementById("b1-23").onclick=function() {
								myStopFunction();
								document.getElementById("b1-23").onclick="";
								document.getElementById("b1-23").style.animation = "movehand2 1s ease-in-out forwards";
								setTimeout(function()
								{
									document.getElementById("b1-22").style.animation = "movepp 1s ease-in-out forwards";
									document.getElementById("b1-23").style.animation = "movehand22 1s ease-in-out forwards";
									setTimeout(function()
									{
							        document.getElementById('Sample2').style.visibility="visible";
										setTimeout(function()
									   {
									    document.getElementById('Sample2').style.visibility="hidden";
										document.getElementById('b1-23').style.visibility="hidden";
										document.getElementById("b22-2").style.animation = "sample 5s ease-in-out  forwards";
										document.getElementById("b22-22").style.animation = "sample10 5s ease-in-out forwards";
										setTimeout(function()
										{
											document.getElementById('b3-22').style.visibility="visible";
											myInt = setInterval(function(){ animatearrow(); }, 500);
	         						        animateArrowATPosition(45,370,30,180);
  	       						            document.getElementById("b3-22").onclick=function() { 
  	       						            myStopFunction();
											document.getElementById("b3-22").style.animation = "movehand12 1s ease-in-out  forwards";
											document.getElementById("b3-11").style.animation = "movebox 1s ease-in-out  forwards";
											setTimeout(function()
											{
												document.getElementById('b3-22').style.visibility="hidden";
												document.getElementById('parr').innerHTML="Total Head:";
												document.getElementById('par11').innerHTML="Left Limb Reading="+data3[p][3]+" cm";
										    setTimeout(function()
										   {
											 document.getElementById('b3-11').style.visibility="hidden";
											 document.getElementById('b4-11').style.visibility="visible";
											 setTimeout(function()
											 {
											 document.getElementById('b4-22').style.visibility="visible";
                                             myInt = setInterval(function(){ animatearrow(); }, 500);
	         						         animateArrowATPosition(45,370,30,180);
  	       						             document.getElementById("b4-22").onclick=function() { 
  	       						             myStopFunction();

												document.getElementById("b4-22").style.animation = "movehand13 1s ease-in-out  forwards";
												document.getElementById("b4-11").style.animation = "movebox1 1s ease-in-out forwards";
												setTimeout(function()
												{
												document.getElementById('b4-22').style.visibility="hidden";
												document.getElementById('par22').innerHTML="Right Limb Reading="+data3[p][4]+"cm";
												document.getElementById('par33').innerHTML="Diffrence="+data3[p][5]+"cm";
												setTimeout(function()
												{
												document.getElementById('b4-11').style.visibility="hidden";
												document.getElementById('parr').style.visibility="hidden";
												document.getElementById('par11').style.visibility="hidden";
												document.getElementById('par22').style.visibility="hidden";
												document.getElementById('par33').style.visibility="hidden";
												document.getElementById('b22-2').style.visibility="hidden";
												document.getElementById('b22-22').style.visibility="hidden";
												document.getElementById('b3-11').style.visibility="hidden";
												document.getElementById('b1-2').style.visibility="visible";
												document.getElementById('b21-2').style.visibility="visible";
												document.getElementById('b21-22').style.visibility="visible";
												document.getElementById('b31-11').style.visibility="visible";
												setTimeout(function()
												{
												    document.getElementById('Sample3').style.visibility="visible";
													setTimeout(function()
												{
												document.getElementById('Sample3').style.visibility="hidden";
												document.getElementById("b21-2").style.animation = "sample1 5s ease-in-out forwards";
												document.getElementById("b21-22").style.animation = "sample10 5s ease-in-out forwards";
												setTimeout(function()
												{
												document.getElementById('b31-22').style.visibility="visible";
                        
                                                myInt = setInterval(function(){ animatearrow(); }, 500);
	         						            animateArrowATPosition(45,370,30,180);
  	       						                document.getElementById("b31-22").onclick=function() { 
  	       						                myStopFunction();
												document.getElementById("b31-22").style.animation = "movehand21 1s ease-in-out forwards";
												document.getElementById("b31-11").style.animation = "movebox2 1s ease-in-out forwards";
												setTimeout(function()
												{               
												document.getElementById('b31-22').style.visibility="hidden";
												document.getElementById('par0').innerHTML="Velocity Head:";
												document.getElementById('par12-2').innerHTML="Left Limb Reading="+data3[p][6]+" cm";
												setTimeout(function()
												{
												document.getElementById('b31-11').style.visibility="hidden";
												document.getElementById('b41-11').style.visibility="visible";
												setTimeout(function()
												{
												document.getElementById('b4-2').style.visibility="visible";
                                                myInt = setInterval(function(){ animatearrow(); }, 500);
	         						            animateArrowATPosition(45,370,30,180);
  	       						                document.getElementById("b4-2").onclick=function() { 
  	       						                myStopFunction();
												document.getElementById("b4-2").style.animation = "movehand13 1s ease-in-out forwards";
												document.getElementById("b41-11").style.animation = "movebox1 1s ease-in-out forwards";
												setTimeout(function()
												{
												document.getElementById('b4-2').style.visibility="hidden";
												document.getElementById('par22-2').innerHTML="Right Limb Reading="+data3[p][7]+" cm";
												document.getElementById('par33-2').innerHTML="Diffrence="+data3[p][8]+"cm";
												document.getElementById('nextButton').style.visibility="visible";
												},2000);
												}
											 },2000);
											},2000);
										  },2000);
										 }
										},5000)
									   },3500);
									  },1000);								 
									},3000); 
								 },2000);
								 }
								},2000);
							 },2000);
							},2000);
							}        
						 },6000);
						},3500);	
						},1000);	
					 },1000);
					};
				 },2000);
				},2000);
               }
			 },2000);
			},2000); 
		 },2000); 
        }
		},6000);
		},3500);
	 },2000);
	},1000);
}


function step44()
{
	myStopFunction();
	 document.getElementById('b-21').onclick="";
	 document.getElementById('c2').style.visibility="hidden";
 document.getElementById('m-7').style.visibility="hidden";
	document.getElementById('b-21').style.visibility="visible";
	document.getElementById("b-21").style.animation = "movehand011 1s ease-in-out forwards";
	setTimeout(function()
	{
		document.getElementById("b13-2").style.animation = "movep1 1s ease-in-out forwards";
		document.getElementById("b-21").style.animation = "movehand01 1s ease-in-out forwards";
		setTimeout(function()
		{
		 document.getElementById('Sample1').style.visibility="visible";
		setTimeout(function()
		{
		    document.getElementById('Sample1').style.visibility="hidden";
			document.getElementById('b-21').style.visibility="hidden";
			document.getElementById("b30-2").style.animation = "sample12 5s ease-in-out forwards";
			document.getElementById("b30-22").style.animation = "sample21 5s ease-in-out forwards";
			setTimeout(function()
			{
			 document.getElementById('b51-11').style.visibility="visible";
			 document.getElementById('b51-22').style.visibility="visible"; 
            myInt = setInterval(function(){ animatearrow(); }, 500);
	        animateArrowATPosition(45,370,30,180);
  	        document.getElementById("b51-22").onclick=function() { 
  	        myStopFunction();
			 document.getElementById("b51-22").style.animation = "movehand24 1s ease-in-out forwards";
			 document.getElementById("b51-11").style.animation = "movebox4 1s ease-in-out forwards";
			 setTimeout(function()
			 {
				 document.getElementById('b51-22').style.visibility="hidden";
				 document.getElementById('pa-1').innerHTML="Static Head:";
				 document.getElementById('pa1-1').innerHTML="Left Limb Reading="+data4[p][0]+" cm";
				 setTimeout(function()
				 {
					document.getElementById('b51-11').style.visibility="hidden"; 
					document.getElementById('b5-11').style.visibility="hidden"; 
					document.getElementById('b6-11').style.visibility="visible";
					setTimeout(function()
					{
					 document.getElementById('b61-22').style.visibility="visible";
                     myInt = setInterval(function(){ animatearrow(); }, 500);
	                 animateArrowATPosition(45,370,30,180);
  	                 document.getElementById("b61-22").onclick=function() { 
  	                 myStopFunction();
					 document.getElementById("b61-22").style.animation = "movehand25 1s ease-in-out forwards";
					 document.getElementById("b6-11").style.animation = "movebox5 1s ease-in-out forwards";
					 setTimeout(function()
					 {
						 document.getElementById('b61-22').style.visibility="hidden";
						 document.getElementById('pa2-1').innerHTML="Right Limb Reading="+data4[p][1]+" cm";
						 document.getElementById('pa3-1').innerHTML="Diffrence="+data4[p][2]+"cm";
						 setTimeout(function()
						 {
							 document.getElementById('b6-11').style.visibility="hidden";
							 document.getElementById('b13-2').style.visibility="hidden";
							 document.getElementById('b30-22').style.visibility="hidden";
							 document.getElementById('b30-2').style.visibility="hidden";
							 document.getElementById('b51-22').style.visibility="hidden";
							 document.getElementById('b51-11').style.visibility="hidden";
							 document.getElementById('b34-22').style.visibility="visible";
							 document.getElementById('b34-2').style.visibility="visible";
							 document.getElementById('b5-11').style.visibility="visible";
							 document.getElementById('pa-1').style.visibility="hidden";
							 document.getElementById('pa1-1').style.visibility="hidden";
							 document.getElementById('pa2-1').style.visibility="hidden";
							 document.getElementById('pa3-1').style.visibility="hidden";
							 setTimeout(function()
							 {
								 document.getElementById('b30-22').style.visibility="hidden";
								 document.getElementById('b30-2').style.visibility="hidden";
								 setTimeout(function()
								 {
									document.getElementById('b-22').style.visibility="visible";
									document.getElementById('b-23').style.visibility="visible";
									myInt = setInterval(function(){ animatearrow(); }, 500);
									animateArrowATPosition(370,80,20,360);
									document.getElementById("b-23").onclick=function() {
										myStopFunction();
										document.getElementById("b-23").onclick="";
										document.getElementById("b-22").style.animation = "movep2 1s ease-in-out forwards";
										document.getElementById("b-23").style.animation = "movehand02 1s ease-in-out forwards";
										setTimeout(function()
										{
											document.getElementById("b34-2").style.animation = "sample10 5s ease-in-out forwards";
											document.getElementById("b34-22").style.animation = "sample21 5s ease-in-out forwards";
											document.getElementById('b-23').style.visibility="hidden";
											setTimeout(function()
											{
												document.getElementById('b5-22').style.visibility="visible";
												myInt = setInterval(function(){ animatearrow(); }, 500);
	                                            animateArrowATPosition(45,370,30,180);
  	                                            document.getElementById("b5-22").onclick=function() { 
  	                                            myStopFunction();
												document.getElementById("b5-22").style.animation = "movehand13 1s ease-in-out forwards";
												document.getElementById("b5-11").style.animation = "movebox1 1s ease-in-out forwards";
												setTimeout(function()
												{
												 document.getElementById('b5-22').style.visibility="hidden";
												 document.getElementById('b5-11').style.visibility="hidden";
												 document.getElementById('b51-111').style.visibility="visible";
												 document.getElementById('paa-1').innerHTML="Total Head:";
												 document.getElementById('pa10-1').innerHTML="Left Limb Reading="+data4[p][3]+"cm";
												 setTimeout(function()
												 {
													 document.getElementById('b5-2').style.visibility="visible";
													 myInt = setInterval(function(){ animatearrow(); }, 500);
	                                                 animateArrowATPosition(45,370,30,180);
  	                                                 document.getElementById("b5-2").onclick=function() { 
  	                                                 myStopFunction();
													 document.getElementById("b5-2").style.animation = "movehand25 1s ease-in-out forwards";
													 document.getElementById("b51-111").style.animation = "movebox5 1s ease-in-out forwards";

													 setTimeout(function()
													 {
													 document.getElementById('b5-2').style.visibility="hidden";
													 document.getElementById('pa20-1').innerHTML="Right Limb Reading="+data4[p][4]+" cm";
													 document.getElementById('pa30-1').innerHTML="Diffrence="+data4[p][5]+"cm";

													 setTimeout(function()
													 {
													 document.getElementById('b51-111').style.visibility="hidden";
													 document.getElementById('b5-2').style.visibility="hidden";
													 document.getElementById('b5-11').style.visibility="hidden";
													 document.getElementById('b35-2').style.visibility="visible";
													 document.getElementById('b35-22').style.visibility="visible"; 
													 document.getElementById('b61-111').style.visibility="visible";
													 document.getElementById('b13-2').style.visibility="visible";
													 document.getElementById('paa-1').style.visibility="hidden";
													 document.getElementById('pa10-1').style.visibility="hidden";
													 document.getElementById('pa20-1').style.visibility="hidden";
													 document.getElementById('pa30-1').style.visibility="hidden";
													 document.getElementById('b34-2').style.visibility="hidden";
													 document.getElementById('b30-2').style.visibility="hidden";
                                                     setTimeout(function()
												    {
												    document.getElementById('Sample3').style.visibility="visible";
                                                    setTimeout(function()
												    {
													document.getElementById('Sample3').style.visibility="hidden";

													 document.getElementById("b35-2").style.animation = "sample 5s ease-in-out forwards";
													 document.getElementById("b35-22").style.animation = "sample11 5s ease-in-out forwards";
													 setTimeout(function()
													 {
													 document.getElementById('b6-2').style.visibility="visible";
													  myInt = setInterval(function(){ animatearrow(); }, 500);
	                                                 animateArrowATPosition(45,370,30,180);
  	                                                 document.getElementById("b6-2").onclick=function() { 
  	                                                 myStopFunction();
													 document.getElementById("b6-2").style.animation = "movehand12 1s ease-in-out forwards";
													 document.getElementById("b61-111").style.animation = "movebox 1s ease-in-out forwards";
													 setTimeout(function()
													 {    
													 document.getElementById('pa0-1').innerHTML="Velocity Head:";
													 document.getElementById('pa11-2').innerHTML="Left Limb Reading="+data4[p][6]+" cm";
													 setTimeout(function()
													 {
													 document.getElementById('b6-12').style.visibility="visible";
													 document.getElementById('b61-111').style.visibility="hidden";

													 document.getElementById('b6-2').style.visibility="hidden";
													 setTimeout(function()
													 {
													 document.getElementById('b6-22').style.visibility="visible";
													 myInt = setInterval(function(){ animatearrow(); }, 500);
	                                                 animateArrowATPosition(45,370,30,180);
  	                                                 document.getElementById("b6-22").onclick=function() { 
  	                                                 myStopFunction();
													 
													 document.getElementById("b6-22").style.animation = "movehand23 1s ease-in-out forwards";
													 document.getElementById("b6-12").style.animation = "movebox3 1s ease-in-out forwards";
													 setTimeout(function()
													 {
													 document.getElementById('b6-22').style.visibility="hidden";
													 document.getElementById('pa22-2').innerHTML="Right Limb Reading="+data4[p][7]+" cm";
													 document.getElementById('pa33-2').innerHTML="Diffrence="+data4[p][8]+"cm";
													 document.getElementById('nextButton').style.visibility="visible";
													},3000);
											        }
												   },3000);
												  },3500);
												 },5500);
											    }
											   },7000);
											  },6000); 
											 },1000); 
											},1000); 
										   },4000);
										  }
										},3000); 
									   },5000);
									  }
									},5000);
								   },3500);
								  };
							     },3500);
							    },1500);
						       },3000); 
						     },2000);
					        }
					       },3000);				  
					      },2000);
				         },2000);
			            }
				       },6000);
			          },3000);
			         },1000);
		            },3000);
	               }


/* function step44()
{
	myStopFunction();
	 document.getElementById('b-21').onclick="";
	document.getElementById('b-21').style.visibility="visible";
	document.getElementById("b-21").style.animation = "movehand011 1s forwards";
	setTimeout(function()
	{
		document.getElementById("b13-2").style.animation = "movep1 1s forwards";
		document.getElementById("b-21").style.animation = "movehand01 1s forwards";
		setTimeout(function()
		{
			document.getElementById('b-21').style.visibility="hidden";
			document.getElementById("b30-2").style.animation = "sample12 5s forwards";
			document.getElementById("b30-22").style.animation = "sample21 5s forwards";
			setTimeout(function()
			{
			 document.getElementById('b51-11').style.visibility="visible";
			 document.getElementById('b51-22').style.visibility="visible"; 
			 document.getElementById("b51-22").style.animation = "movehand24 1s forwards";
			 document.getElementById("b51-11").style.animation = "movebox4 1s forwards";
			 setTimeout(function()
			 {
				 document.getElementById('b51-22').style.visibility="hidden";

				 document.getElementById('pa-1').innerHTML="Static Head";
				 document.getElementById('pa1-1').innerHTML="Right Limb Reading="+data4[p][0]+" cm";
				 setTimeout(function()
				 {
					document.getElementById('b51-11').style.visibility="hidden"; 

					document.getElementById('b5-11').style.visibility="hidden"; 
					document.getElementById('b6-11').style.visibility="visible";
					setTimeout(function()
					{

					 document.getElementById('b61-22').style.visibility="visible";

					 document.getElementById("b61-22").style.animation = "movehand25 1s forwards";
					 document.getElementById("b6-11").style.animation = "movebox5 1s forwards";
					 setTimeout(function()
					 {
						 document.getElementById('b61-22').style.visibility="hidden";
						 document.getElementById('pa2-1').innerHTML="Left Limb Reading="+data4[p][1]+" cm";
						 document.getElementById('pa3-1').innerHTML="Diffrence="+data4[p][2]+"cm";
						 setTimeout(function()
						 {
							 document.getElementById('b6-11').style.visibility="hidden";
							 document.getElementById('b13-2').style.visibility="hidden";
							 document.getElementById('b30-22').style.visibility="hidden";
							 document.getElementById('b30-2').style.visibility="hidden";
							 document.getElementById('b51-22').style.visibility="hidden";
							 document.getElementById('b51-11').style.visibility="hidden";
							 document.getElementById('b34-22').style.visibility="visible";
							 document.getElementById('b34-2').style.visibility="visible";
							 document.getElementById('b5-11').style.visibility="visible";
							 document.getElementById('pa-1').style.visibility="hidden";
							 document.getElementById('pa1-1').style.visibility="hidden";
							 document.getElementById('pa2-1').style.visibility="hidden";
							 document.getElementById('pa3-1').style.visibility="hidden";
							 setTimeout(function()
							 {

								 document.getElementById('b30-22').style.visibility="hidden";
								 document.getElementById('b30-2').style.visibility="hidden";
								 setTimeout(function()
								 {
									document.getElementById('b-22').style.visibility="visible";
									document.getElementById('b-23').style.visibility="visible";
									myInt = setInterval(function(){ animatearrow(); }, 500);
									animateArrowATPosition(370,80,20,360);
									document.getElementById("b-23").onclick=function() {
										myStopFunction();
										document.getElementById("b-23").onclick="";
										document.getElementById("b-22").style.animation = "movep2 1s forwards";
										document.getElementById("b-23").style.animation = "movehand02 1s forwards";
										setTimeout(function()
										{
											document.getElementById("b34-2").style.animation = "sample13 5s forwards";
											document.getElementById("b34-22").style.animation = "sample21 5s forwards";
											document.getElementById('b-23').style.visibility="hidden";
											setTimeout(function()
											{
												document.getElementById('b5-22').style.visibility="visible";
												document.getElementById("b5-22").style.animation = "movehand13 1s forwards";
												document.getElementById("b5-11").style.animation = "movebox1 1s forwards";
												setTimeout(function()
												{
												 document.getElementById('b5-22').style.visibility="hidden";
												 document.getElementById('b5-11').style.visibility="hidden";
												 document.getElementById('b51-111').style.visibility="visible";
												 document.getElementById('paa-1').innerHTML="Static Head";
												 document.getElementById('pa10-1').innerHTML="Right Limb Reading="+data4[p][3]+" cm";
												 setTimeout(function()
												 {
													 document.getElementById('b5-2').style.visibility="visible";
													 document.getElementById("b5-2").style.animation = "movehand25 1s forwards";
													 document.getElementById("b51-111").style.animation = "movebox5 1s forwards";

													 setTimeout(function()
													 {
													 document.getElementById('b5-2').style.visibility="hidden";
													 document.getElementById('pa20-1').innerHTML="Left Limb Reading="+data4[p][4]+" cm";
													 document.getElementById('pa30-1').innerHTML="Diffrence="+data4[p][5]+"cm";

													 setTimeout(function()
													 {
													 document.getElementById('b51-111').style.visibility="hidden";
													 document.getElementById('b5-2').style.visibility="hidden";
													 document.getElementById('b5-11').style.visibility="hidden";
													 document.getElementById('b35-2').style.visibility="visible";
													 document.getElementById('b35-22').style.visibility="visible"; 
													 document.getElementById('b61-111').style.visibility="visible";
													 document.getElementById('b13-2').style.visibility="visible";
													 document.getElementById('paa-1').style.visibility="hidden";
													 document.getElementById('pa10-1').style.visibility="hidden";
													 document.getElementById('pa20-1').style.visibility="hidden";
													 document.getElementById('pa30-1').style.visibility="hidden";
													 document.getElementById("b35-2").style.animation = "sample 5s forwards";
													 document.getElementById("b35-22").style.animation = "sample2 5s forwards";
													 setTimeout(function()
													 {
													 document.getElementById('b6-2').style.visibility="visible";
													 document.getElementById("b6-2").style.animation = "movehand12 1s forwards";
													 document.getElementById("b61-111").style.animation = "movebox 1s forwards";
													 setTimeout(function()
													 {    

													 document.getElementById('pa0-1').innerHTML="Static Head";
													 document.getElementById('pa11-2').innerHTML="Right Limb Reading="+data4[p][6]+" cm";
													 setTimeout(function()
													 {
													 document.getElementById('b6-12').style.visibility="visible";
													 document.getElementById('b61-111').style.visibility="hidden";

													 document.getElementById('b6-2').style.visibility="hidden";
													 setTimeout(function()
													 {
													 document.getElementById('b6-21').style.visibility="visible";
													 document.getElementById("b6-21").style.animation = "movehand23 1s forwards";
													 document.getElementById("b6-12").style.animation = "movebox3 1s forwards";
													 setTimeout(function()
													 {
													 document.getElementById('b6-21').style.visibility="hidden";
													 document.getElementById('pa22-2').innerHTML="Left Limb Reading="+data4[p][7]+" cm";
													 document.getElementById('pa33-2').innerHTML="Diffrence="+data4[p][8]+"cm";
													 document.getElementById('nextButton').style.visibility="visible";
													 },3000);
													},3000);
												 },3500);
												},5500);
											 },7000);
											},6000); 
										 },4000);
										},3000); 
					 },3000);
									},5000);
								 },3500);
								};
							 },3500);
							},1500);
						 },3000); 
						},2000);
					 },3000);
					},2000);
				 },2000);
				},5000);
			 },3000);
			},3000);
		 } */