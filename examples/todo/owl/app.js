class App extends Component {
    setup() {
        this.ID = 0;
        this.state = useState({"items": []});
        this.env = {};
        this.env.bus = new EventBus();
        this.env.bus.addEventListener("add-to-do", this.addToDo.bind(this));
    }

    addToDo(name) {
        this.state.items.push({id: this.ID++, name});
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

mount(App, document.body);