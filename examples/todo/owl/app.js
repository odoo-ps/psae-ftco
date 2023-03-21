import {Content} from "./content.js";
import {Item} from "./item.js";

const {Component, EventBus, xml, mount, useState} = owl;

const env = {};
env.bus = new EventBus();

class App extends Component {
    setup() {
        super.setup(...arguments);
        this.ID = 0;
        this.state = useState({"items": []});
        env.bus.addEventListener("add-to-do", this.addToDo.bind(this));
        env.bus.addEventListener("remove-to-do", this.removeToDo.bind(this));
    }

    addToDo(e) {
        this.state.items.push({id: this.ID++, name: e.detail});
    }

    removeToDo(e){
        this.state.items = this.state.items.filter(item => item.id !== e.detail);
    }

    static components = {Content, Item};

    static template = xml`
    <main>
        <Content/>
        <div id="list">
            <Item t-foreach="state.items" t-as="item" id="item.id" name="item.name" t-key="item_index"/>
        </div>
    </main>`
}

mount(App, document.body, {env});