import { ComponenteBase } from '../componente_base.js';

export class ElementoTreeMap extends ComponenteBase {

    constructor(){
        super({templateURL:"/componentes/container_treemap/elemento_treemap.html", shadowDOM:true});

        this.addEventListener("carregou", () => {                   
            this.componente = {url:"/componentes/contatos/contatos_view.js",nome:"contatos-view"};
            this.carregarComponente();
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name.localeCompare("componente") == 0){
            this.componente = JSON.parse(newValue);
            this.carregarComponente();
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