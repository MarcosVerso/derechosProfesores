import { BaseComponent, registerComponent } from "../BaseComponent.js"

export class HeaderComponent extends BaseComponent{
    html(){
        return `
            <div class="header">
                <img src="/img/image.png">
                <div class="text-group">
                    <h4>PORTAL DOCENTE:</h4>
                    <h1>Deberes y <span class="amarillo">Derechos</span> de los Docentes</h1>
                    <span>Tu espacio de referencia para conocer, respetar y defender tu labor educativa</span>
                </div>
                
            </div>
            <div class="navbar">
                <ul>
                <h4>INICIO</h4>
                <h4>DEBERES</h4>
                <h4>DERECHOS</h4>
                <h4>RECURSOS</h4>
                <h4>NOVEDADES</h4>
                <h4>ASESORIA</h4>
                <h4>CONTACTO</h4>
                </ul>
            </div>
        `;
    }
}

registerComponent("header-c", HeaderComponent);