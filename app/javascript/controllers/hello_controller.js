import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hello"
export default class extends Controller {
  
  //Los targets son arrays así que pueden ser stackeados como tales
  static targets = ["text", "sentence"]

  connect() {
    //Esto hace un setup una primera vez como Unity
    console.log("Esto funciona")
    //Puedo llamar metodos nada mas aparecer!
    this.display()
  }

  hello(){
    //Metodo creado por mi sin usar
    console.log(this.element)
  }
  miMetodoP(){
    const parrafo = document.createElement('p')
    parrafo.textContent = "Hola, esto fue generado con DOMScripting en Stimulus"
    this.textTarget.appendChild(parrafo)
  }
  changeText(event){
    //Event.target me da acceso a todo lo del dom que está siendo clicado
    console.log(event.target.textContent)
    let texto = ""
    for (let i = 0; i < 100; i++) {
      texto += "HOLA "
    }
    this.sentenceTarget.textContent = texto
  }
  display(){
    //Se puede manipular el DOM como queramos
    console.log(this.element.querySelector('h1').textContent)

    //Setear un timer para dar tiempo a que las clases se pongan bien :0
    setTimeout(() => {
      this.element.classList.add("apparition")
    }, 1200)
  }
}
