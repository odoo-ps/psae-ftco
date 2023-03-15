class Item extends Component {
    setup() {
        this.removeToDo = () => this.env.bus.trigger("remove-to-do", this.props.id);
    }

    static props = ["id", "name"];

    static template = xml`
    <div t-att-id="props.id">
        <p t-out="props.name"/>
        <button t-on-click="removeToDo">Remove</button>
    </div>`;
}