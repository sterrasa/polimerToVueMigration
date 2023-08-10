import { describe, it, beforeEach, afterEach, vi } from 'vitest';
import { expect } from 'chai'; // Import assertion library
import { mount } from '@vue/test-utils'

import NumberSelector from '@/components/number-selector/NumberSelector.ce.vue';

describe('NumberSelector Test suite', () => {

    let consoleWarnSpy;

    beforeEach(() => {
        consoleWarnSpy = vi.spyOn(console, 'warn');
    });

    afterEach(() => {
        consoleWarnSpy.mockRestore();
    });

    it('should render the webcomponent without errors', () => {
        const wrapper = mount(NumberSelector, {
            props: {
                minValue: 0,
                maxValue: 10,
            },
        });
        expect(wrapper.element).toMatchSnapshot()
    });

    it('should render MainSelector with the correct length', () => {
        const minValue = 0;
        const maxValue = 10;
        const wrapper = mount(NumberSelector, {
            props: {
                minValue,
                maxValue,
            },
        });
        const selectables = wrapper.element.querySelectorAll('.selectable');
        expect(selectables).to.have.lengthOf(maxValue - minValue + 1);
    });

    it('should render the correct slot message', () => {
        const message = 'Please select a number!';
        const wrapper = mount(NumberSelector, {
            slots: {
                default: message,
            },
        });
        const slotContent = wrapper.find('.number-selector').text();
        console.log(slotContent)
        expect(slotContent.trim()).to.equal(message);

    });

    it('should emit the "selected" event with the correct number when a number is selected', async () => {
        const wrapper = mount(NumberSelector, {
            props: {
                minValue: 1,
                maxValue: 10,
            },
        });

        const inputElement = wrapper.findAll('input[type="radio"]').at(2);
        await inputElement.trigger('change');

        expect(wrapper.emitted()).toHaveProperty('selected');
        expect(wrapper.emitted('selected')).toHaveLength(1);

        const emittedValue = wrapper.emitted('selected')[0][0];
        expect(typeof emittedValue).toBe('number');
        expect(emittedValue).toBe(3);
    });

    it('should log a warning when minValue or maxValue prop is missing', () => {
        mount(NumberSelector);
        const warningMessageMinValue = '[Vue warn]: Missing required prop: "minValue"';
        const warningMessageMaxValue = '[Vue warn]: Missing required prop: "maxValue"';
        const hasMinValueWarning = consoleWarnSpy.mock.calls.some(call => call[0].includes(warningMessageMinValue));
        const hasMaxValueWarning = consoleWarnSpy.mock.calls.some(call => call[0].includes(warningMessageMaxValue));

        expect(hasMinValueWarning && hasMaxValueWarning).to.be.true;

    });

});
