import { BaseComponent, registerComponent } from "../BaseComponent.js";
import { HeaderComponent } from "../HeaderComponent/index.js";

export class AppComponent extends BaseComponent{
    html(){
        return `
            <header-c></header-c>
            
        `;
    }
};

registerComponent("app-c", AppComponent);