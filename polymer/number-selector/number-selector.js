Polymer({

    is: 'x-number-selector',

    properties: {
        min: {
            type: Number,
            value: 0,
        },
        max: {
            type: Number,
            value: 10,
        }
    },

    attached() {
        console.log('onAttached');
        if(this.min >= 0 && this.max >= 0) {
            const tmpItems = [];
            for (let i = this.min; i <= this.max; i++) {
                tmpItems.push(i);
            }
            this.items = tmpItems;
        }
    },

    onSelected(e) {
        const selectedNumber = e.target.id;
        console.log('selected #%s', selectedNumber);
        this.fire('selected', selectedNumber);
    }
});
