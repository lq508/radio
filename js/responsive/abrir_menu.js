console.log("hola");



class Abrir_menu{


	constructor(){

		this.Abrir_menu(); 
	}


	Abrir_menu(){

		let button_open = document.querySelector(".button_open");


		button_open.addEventListener("click", ()=>{

			let header_ul = document.querySelector(".header_ul");
			header_ul.style.left="0";





		});


	}



}


let open = new Abrir_menu();