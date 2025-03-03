//Se debe trabajar con toda la web
//Se usa el método 'ready()' para indicar que la web está lista
jQuery(document).ready(listo);


function listo()
{
	//Se selecciona el elemento 'hamburguesa'==> hamb que es un 'selector'
	//"function(){}" es función 'anónima'
	jQuery(".hamb").click(function(e){

		//'e' representa a una acción
		e.preventDefault()

		//Se selecciona el elemento 'nav' para hacer que regregse a su posición normal
		jQuery("header .container nav").toggleClass("open") 

		//Cuando se abra el menú en mobile se mostrará el ícono "X" para cerrar
		//Se selecciona la 'i' para cambiarla
		//la 'i' que está dentro de un elemento con clase 'hamb'
		jQuery(".hamb i").toggleClass("fa-times")  


	});
}

