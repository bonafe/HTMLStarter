import { ComponenteBase } from '../componente_base.js';



export class EditorJSON extends ComponenteBase {



    constructor(){
        super({templateURL:"/componentes/editor_json/editor_json.html", shadowDOM:true});

        this.addEventListener("carregou", () => {

            //Importa dinamicamente a biblioteca JSONEditor
            import('/bibliotecas/jsoneditor/jsoneditor.js').then(modulo => {

                this.criarEditor();                               
            });
        });
    }



    static get observedAttributes() {
        return ['dados'];
    }



    attributeChangedCallback(nomeAtributo, valorAntigo, novoValor) {

        if (nomeAtributo.localeCompare("dados") == 0){
            this.dados = JSON.parse(novoValor);
            this.atualizarDadosEditor();
        }
    }  



    criarEditor(){
        let container = this.noRaiz.querySelector("#editorJSON");
        let opcoes = {
            mode: 'tree'
        };
        this.editor = new JSONEditor(container, opcoes);
        this.atualizarDadosEditor();
    }



    atualizarDadosEditor(){
        if (this.editor && this.dados){
            this.editor.set(this.dados);
        }
    }
}
customElements.define('editor-json', EditorJSON);