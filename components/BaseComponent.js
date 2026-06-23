export class BaseComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const origin = window.location.origin;
    const pathname = window.location.pathname;

    // Aseguramos que el pathname termine en barra si no lo hace, y limpiamos dobles barras
    const basePath = pathname.endsWith('/') ? pathname : `${pathname}/`;
    const cssPath = `${origin}${basePath}components/${folderName}/style.css`;

    console.log("Cargando CSS desde:", cssPath);
        this.shadowRoot.innerHTML = `
            <style>
                @import url("${cssPath}");
            </style>
            ${this.html()}
        `;
        this.afterRender();
    }

    html(){return ``;}
    afterRender(){}
};

export function registerComponent(tagName, componentClass){
    componentClass._folderName = componentClass.name;
    customElements.define(tagName, componentClass);
}