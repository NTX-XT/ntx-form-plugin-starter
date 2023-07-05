import { type PluginContract } from '@nintex/form-plugin-contract'
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { config } from './starter-kit-card.config';

@customElement('starter-kit-card')
export class StarterKitCard extends LitElement {
    static getMetaConfig = (): Promise<PluginContract> | PluginContract => config;

    @property({ type: String })
    cardTitle = 'Title'

    @property({ type: String })
    cardText = 'Text'

    @property({ type: Boolean })
    darkMode = false

    @property({ type: Boolean })
    centerText = false

    private imageUrl = 'https://www.nintex.com/wp-content/themes/portent_nintex/ui/images/nintex_logo.svg'

    override render = () => {
        const cardStyle = this.darkMode ? 'text-white bg-dark' : ''
        const centerTextStyle = this.centerText ? 'text-center' : ''
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            <div class="card ${centerTextStyle} ${cardStyle}" style="width: 18rem;">
                <img src="${this.imageUrl}" class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">${this.cardTitle}</h5>
                    <p class="card-text">${this.cardText}</p>
                    <a href=https://help.nintex.com/en-US/formplugins/Home.htm" class="btn btn-primary">Go to the SDK</a>
                </div>
            </div>`
    }
}
