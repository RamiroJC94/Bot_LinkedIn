//	Documentacion	:
//	Require : 
//		* n : cantidad de contactos
//		
//		* estar situado en : https://www.linkedin.com/mynetwork/invite-connect/connections/
//
//	Function : 		Crea un JSON con informacion de los contactos
//
//	How to use?	: 	copiar el codigo, pegar en la consola del browser,
//					ingresar :
//						ProcessA(<cantidad de contactos>);
//
//					al finalizar ingresar :
//						var a = ProcessB(<cantidad de contactos>);
//						console.log(a);				


var list = {};

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, ms);
  });
}

async function asyncCall(ms) {
	console.log('calling');
	var result = await delay(ms);
	console.log(result);
	// expected output: 'resolved'
	console.log("-----------------");
}

async function asyncCallIntoView(ms) {
	console.log('calling : ' + $('.list-style-none').length);
	var result = await delay(ms);
	document.getElementById('type-ahead-wormhole').scrollIntoView();
	console.log(result + $('.list-style-none').length);
	// expected output: 'resolved'
	console.log("-----------------");
}

async function ProcessA (n) {
	console.log("--- init ---");
	for (var i = ((n - 40) / 40) - 1; i >= 0; i--) {
		await asyncCallIntoView(2000);
	}
	console.log("--- end ---");
	console.log("");
}

function ProcessB (n) {
	var Volatil_JSON	= {};
	var nombre			= "";
	var descripcion 	= "";
	var href			= "";

	console.log("--- init ---");
	for (var i = n - 1; i >= 0; i--) {

		nombre				=	$('.list-style-none')[i].children[0].children[1].children[0].children[1].innerText.toString();

		descripcion			=	$('.list-style-none')[i].children[0].children[1].children[0].children[3].innerText.toString();

		href				=	$('.list-style-none')[i].children[0].children[1].children[0].attributes[1].textContent.toString();

		//Volatil_JSON.append({'"'+nombre+'" : { "href" : "'+href+'" , "descripcion" : "'+descripcion+'"}'});

		console.log(nombre);

		Volatil_JSON[nombre]=	{
									"href" : '"'+href+'"',
									"descripcion" : '"'+descripcion+'"'
								};

	}
	console.log("--- end ---");
	console.log("");
	//return (Volatil_JSON);
	return Volatil_JSON;
}