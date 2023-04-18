import { type PluginContract } from '@nintex/form-plugin-contract'
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { config } from './starter-kit-hello.config';

@customElement('starter-kit-card')
export class MyCardTS extends LitElement {
    @property({ type: String })
    cardTitle = 'Card Title'

    @property({ type: String })
    cardText = 'This is a bootstrap card'

    @property({ type: String })
    imageUrl = 'https://www.nintex.com/wp-content/themes/portent_nintex/ui/images/nintex_logo.svg'

    @property({ type: String })
    link = 'https://www.nintex.com/'

    @property({ type: Boolean })
    darkMode = false

    @property({ type: Boolean })
    centerText = false

    static getMetaConfig(): Promise<PluginContract> | PluginContract {
        return config;
    }

    render = () => {
        const cardStyle = this.darkMode ? 'text-white bg-dark' : ''
        const centerTextStyle = this.centerText ? 'text-center' : ''
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
            </script>
            <div class="card ${centerTextStyle} ${cardStyle} mb-3" style="max-width: 18rem;">
                <h5 class="card-header">${this.cardTitle}</h5>
                <img src="${this.imageUrl}" class="card-img-top p-3" alt="" />
                <div class="card-body">
                    <p class="card-text">${this.cardText}</p>
                    <a href="${this.link}" class="btn btn-primary">Go!</a>
                </div>
            </div>`
    }
}
