console.log("hola");



class Cerrar_menu{


	constructor(){

		this.Cerrar_menu(); 
	}


	Cerrar_menu(){

		let button_open = document.querySelector(".button_closed");


		button_open.addEventListener("click", ()=>{

			let header_ul = document.querySelector(".header_ul");
			header_ul.style.left="100%";





		});


	}



}


let closed = new Cerrar_menu();