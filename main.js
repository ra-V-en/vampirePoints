function correctForClan() {
	var clan = document.getElementById('clanSelect');
	var app = new Array();
	for (i=1,max=5;i<=max;i++) {
		app[i] = document.getElementById('app'+i);
		}

		
	if (clan.value == "Nosferatu") {
		for (i=1,max=5;i<=max;i++) {
			app[i].disabled = true;
			app[i].checked = false;
		} 
	} else {
		for (i=1,max=5;i<=max;i++) {
			if (i==1) {
			app[1].checked = true;
			} else {
			app[i].disabled = false;
			}
		}
	}

	while (document.getElementById('out-clan-disc1').options.length > 0) {
		document.getElementById('in-clan-disc1').options.remove(0);
		document.getElementById('in-clan-disc2').options.remove(0);
		document.getElementById('in-clan-disc3').options.remove(0);
		document.getElementById('out-clan-disc1').options.remove(0);
		document.getElementById('out-clan-disc2').options.remove(0);
		document.getElementById('out-clan-disc3').options.remove(0);
	}

	var disciplinesByClan = new Array();
	disciplinesByClan['Assimite'] = ['Celerity', 'Obfuscate', 'Quietus'];
	disciplinesByClan['Brujah'] = ['Celerity', 'Potence', 'Presence'];
	disciplinesByClan['Gangrel'] = ['Animalism', 'Fortitude', 'Protean'];
	disciplinesByClan['Giovanni'] = ['Dominate', 'Necromancy', 'Potence'];
	disciplinesByClan['Lasombra'] = ['Dominate', 'Obtenebration', 'Potence'];
	disciplinesByClan['Malkavian'] = ['Auspex', 'Dementation', 'Obfuscate'];
	disciplinesByClan['Nosferatu'] = ['Animalism', 'Obfuscate', 'Potence'];
	disciplinesByClan['Ravnos'] = ['Animalism', 'Chimerstry', 'Fortitude'];
	disciplinesByClan['Toreador'] = ['Auspex', 'Celerity', 'Presence'];
	disciplinesByClan['Tremere'] = ['Auspex', 'Dominate', 'Thaumaturgy'];
	disciplinesByClan['Ventrue'] = ['Dominate', 'Fortitude', 'Presence'];
	disciplinesByClan['Tzimisce'] = ['Animalism', 'Auspex', 'Vicissitude'];
	disciplinesByClan['Setite'] = ['Obfuscate', 'Presence', 'Serpentis'];

	var allDisciplines = [' ', 'Animalism', 'Auspex', 'Celerity', 'Chimerstry', 'Dementation', 'Dominate', 'Fortitude', 'Obfuscate', 'Obtenebration', 'Potence', 'Presence', 'Protean', 'Quietus', 'Serpentis', 'Vicissitude']

	var thisClan = disciplinesByClan[clan.value];
	var indisciplines = new Array();
	var outdisciplines1 = new Array();
	var outdisciplines2 = new Array();
	var outdisciplines3 = new Array();
	for (i=0;i<3;i++) {
		indisciplines[i] = new Option(thisClan[i]);
		}
		
		document.getElementById('in-clan-disc1').options.add(indisciplines[0]);
		document.getElementById('in-clan-disc2').options.add(indisciplines[1]);
		document.getElementById('in-clan-disc3').options.add(indisciplines[2]);

	for (i=0;i<15;i++) {
		outdisciplines1[i] = new Option(allDisciplines[i]);
		outdisciplines2[i] = new Option(allDisciplines[i]);
		outdisciplines3[i] = new Option(allDisciplines[i]);
	}

	for (i=0;i<15;i++) {
			document.getElementById('out-clan-disc1').options.add(outdisciplines1[i]);
			document.getElementById('out-clan-disc2').options.add(outdisciplines2[i]);
			document.getElementById('out-clan-disc3').options.add(outdisciplines3[i]);
		}
	
	document.getElementById('clanName').innerHTML = "<h1>" + clan.value + "</h1>";
	
	window.nextStep();
}

function flyoutOnRight() {
	window.flown = false;
	window.stepName = "Step1";
	window.phases = document.getElementById("phases");
	window.phasesName = document.getElementById("phasesName");
	window.phasesBody = document.getElementById("phasesBody");
	
	phases.style.width = 325;
	phases.style.left = (window.innerWidth - 45);
	phases.style.height = (window.innerHeight * .75);
}

function flyout() {
	window.phases.style.left = window.innerWidth - (window.phases.style.width.replace("px","").valueOf());
	window.flown = true;
	phasesName = document.getElementById("phasesName");
	phasesBody = document.getElementById("phasesBody");
	
	phasesName.style.display = "none";
	phasesBody.style.display = "block";
	
}

function flyin() {
	window.phases.style.left = window.innerWidth - 45;
	window.flown = false;
	
	
	phasesName.style.display = "inline-block";
	phasesBody.style.display = "none";
}

function nextStep() {
	switch (window.stepName) {
		case "Step1":
			stepName = "Step2";
			step2();
			break;
			
		case "Step2":
			stepName = "Step3";
			step3();
			break;
		
		case "Step3":
			stepName = "Step4";
			step4();
			break;
			
		case "Step4":
			stepName = "Step5";
			step4();
			break;
	
	
	};
	alert("hi");
	flyout();
	alert("hi");
}

function step2() {

	var blocker = document.createElement("div");
	blocker.style.position = "absolute";
	blocker.style.display = "inline";	
	blocker.style.top = 215;
	blocker.style.left = 19;
	blocker.style.width = 300;
	blocker.style.height = 78;
	blocker.style.backgroundColor = "#000";
	blocker.style.opacity = .5;
	
	window.leftBlocker = document.body.appendChild(blocker);
	window.centerBlock = leftBlocker.cloneNode(false);
	window.centerBlocker = document.body.appendChild(centerBlock);
	window.rightBlock = leftBlocker.cloneNode(false);
	window.rightBlocker = document.body.appendChild(rightBlock);
	
	centerBlocker.style.left = 331;
	rightBlocker.style.left = 642;
	
	document.getElementById("dotCounter").innerText = "7";
	document.getElementById("dotCounter").display = "block";
	
	document.getElementById("Step1").className = "previous";
	document.getElementById("Step2").className = "current";
}

function step3() {	
	document.getElementById("dotCounter").innerText = "5";
	document.getElementById("dotCounter").display = "block";
	
	document.getElementById("Step2").className = "previous";
	document.getElementById("Step3").className = "current";
}

function step4() {	
	document.getElementById("dotCounter").innerText = "3";
	document.getElementById("dotCounter").display = "block";
	
	document.getElementById("Step3").className = "previous";
	document.getElementById("Step4").className = "current";

}

function decrementCounter() {
	document.getElementById("dotCounter").innerText = document.getElementById("dotCounter").innerText.valueOf() - 1;
	if (document.getElementById("dotCounter").innerText.valueOf() == 0) {
		document.getElementById("dotCounter").style.display = "none"; 
		nextStep();
	}
	
}

function incrementCounter() {
	document.getElementById("dotCounter").innerText = document.getElementById("dotCounter").innerText.valueOf() + 1;

}
