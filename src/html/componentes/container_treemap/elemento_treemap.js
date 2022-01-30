import { ComponenteBase } from '../componente_base.js';



export class ElementoTreeMap extends ComponenteBase {



    constructor(){
        super({templateURL:"/componentes/container_treemap/elemento_treemap.html", shadowDOM:true});

        this.dados = null;

        this.addEventListener("carregou", () => {  

            //Se o atributo dados foi preenchido
            if (this.componente){                             
                this.carregarComponente();
            }
        });
    }



    static get observedAttributes() {
        return ['dados','componente'];
    }



    attributeChangedCallback(name, oldValue, newValue) {

        if (name.localeCompare("componente") == 0){

            this.componente = JSON.parse(newValue);

            //Se o componente base já foi carregado
            if (this.carregado){
                this.carregarComponente();
            }
        }
    }



    carregarComponente(){

        //Carrega dinamicamente o componente
        import(this.componente.url).then(modulo => {

            let instanciaComponente = document.createElement(this.componente.nome);
            //instanciaComponente.setAttribute("dados", dados);
            this.noRaiz.querySelector("#containerComponente").appendChild(instanciaComponente);
        });
    }
}
customElements.define('elemento-treemap', ElementoTreeMap);