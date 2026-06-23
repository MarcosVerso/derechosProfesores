import { BaseComponent, registerComponent } from "../BaseComponent.js";
import { HeaderComponent } from "../HeaderComponent/index.js";

export class AppComponent extends BaseComponent {
    html() {
        return `
            <header-c></header-c>
            
            <div class="content">
                <div class="hero-section">
                    <h4>¡BIENVENIDO AL PORTAL DEL DOCENTE!</h4>
                    <h1>Conoce tus Compromisos, Empodera tus Derechos.</h1>
                    <div class="hero-buttons">
                        <button class="btn blue">[CONSULTAR MIS DEBERES]</button>
                        <button class="btn yellow">[CONOCER MIS DERECHOS]</button>
                    </div>
                </div>

                <div class="keys-section">
                    <h4>PUNTOS CLAVE</h4>
                    <h2>Compromisos y Garantías.</h2>
                    
                    <div class="columns-container">
                        <div class="column">
                            <img src="img/libro.png" alt="Icono Deberes" class="key-icon">
                            <div class="column-text">
                                <h3>DEBERES</h3>
                                <ul>
                                    <li>Cumplimiento Normativo</li>
                                    <li>Ética Profesional</li>
                                    <li>Formación Continua</li>
                                    <li>Protección Estudiantil</li>
                                    <li>Planificación y Evaluación</li>
                                </ul>
                            </div>
                        </div>

                        <div class="column">
                            <img src="img/escudo.png" alt="Icono Derechos" class="key-icon">
                            <div class="column-text">
                                <h3>DERECHOS</h3>
                                <ul>
                                    <li>Estabilidad Laboral</li>
                                    <li>Remuneración Justa</li>
                                    <li>Salud y Bienestar</li>
                                    <li>Libertad de Cátedra</li>
                                    <li>Participación y Voz</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-cards-container">
                    <div class="footer-card">
                        <img src="img/noticias.png" alt="Noticias" class="card-icon">
                        <div class="card-text">
                            <span class="card-tag">[Últimas Noticias]</span>
                            <p>Actualizaciones sobre regulaciones vigentes</p>
                        </div>
                    </div>
                    <div class="footer-card">
                        <img src="img/recursos.png" alt="Recursos" class="card-icon">
                        <div class="card-text">
                            <span class="card-tag">[Recursos Populares]</span>
                            <p>Plantillas para contratos y acuerdos</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

registerComponent("app-c", AppComponent);