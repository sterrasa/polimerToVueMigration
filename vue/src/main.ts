import { defineCustomElement } from 'vue';
import './style.css';
import NumberSelector from '@/components/number-selector/NumberSelector.ce.vue';

const NumberSelectorComponent = defineCustomElement(NumberSelector);

customElements.define('number-selector', NumberSelectorComponent);

