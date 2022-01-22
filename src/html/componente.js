export class Componente extends HTMLElement{


    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.carregarTemplate();
    }

    async carregarTemplate(){
        let resposta = await fetch("componente.html");
        let textoPagina = await resposta.text();
        let template = document.createElement("template");
        template.innerHTML = textoPagina;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.dispatchEvent(new Event("carregou"));
    }

    static get observedAttributes() {
        return ['dados'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name.localeCompare("dados") == 0){
            this.dados = JSON.parse(newValue);
            this.atualizarDados();
        }
    }

    atualizarDados(){
    }

    connectedCallback() {
    }



    disconnectedCallback() {
    }



    adoptedCallback() {
    }
}
customElements.define('componente-view', Componente);