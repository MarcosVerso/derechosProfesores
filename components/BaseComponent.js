export class BaseComponent extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const folderName = this.constructor._folderName;
        const cssPath = `${folderName}/style.css`;


        console.log(cssPath);
        this.shadowRoot.innerHTML = `
            <style>
                @import url("./components/${cssPath}");
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