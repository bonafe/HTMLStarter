import { ComponenteBase } from '../componente_base.js';

export class ElementoTreeMap extends ComponenteBase {

    constructor(){
        super({templateURL:"/componentes/container_treemap/elemento_treemap.html", shadowDOM:true});
    }
}
customElements.define('elemento-treemap', ElementoTreeMap);