//	Documentacion	:
//	Require : 
//		* n : cantidad de contactos a eliminar
//		
//		* estar situado en : https://www.linkedin.com/mynetwork/invite-connect/connections/
//
//	Function : Borra n cantidad de contactos de LinkedIn
//
//	How to use?	: copiar el codigo, pegar y llamar a la funcion ProcessA(n);


function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, ms);
  });
}

async function asyncCall(ms) {
	console.log('calling : ' + document.getElementsByClassName("mn-connection-card__name t-16 t-black t-bold").length);
	var result = await delay(ms);
	console.log(result+' : ' + document.getElementsByClassName("mn-connection-card__name t-16 t-black t-bold").length);
	// expected output: 'resolved'
	console.log("-----------------");
}

async function ProcessA (n) {
	for (var i = n - 1; i >= 0; i--) {
		console.log("--- init ---");
		$('.list-style-none')[0].children[0].children[2].children[1].children[0].click();
		await asyncCall(2000);
		$('.list-style-none')[0].children[$('.list-style-none')[0].firstElementChild.id].children[2].children[1].children[1].childNodes[3].children[0].click();
		await asyncCall(2000);
		$('.mn-delete-connection-modal__actions')[0].children[1].click();
		await asyncCall(2000);
		console.log("--- end ---");
		console.log("");	
	}
}