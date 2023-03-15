const {Component, useState, mount, xml} = owl;

class Counter extends Component {
    setup() {
        this.state = useState({"counter": 0});
        this.increment = () => this.state.counter++;
    }

    static template = xml`
    <main>
	    <input type="number" t-model="state.counter"/>
	    <button t-on-click="increment">Increment</button>
    </main>`;
}

mount(Counter, document.body);