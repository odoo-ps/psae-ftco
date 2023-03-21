const {Component, xml} = owl;

export class Item extends Component {
    setup() {
        this.remove = () => this.env.bus.trigger("remove-to-do", this.props.id);
    }

    static props = ["id", "name"];

    static template = xml`
    <div t-att-id="props.id">
        <p t-out="props.name"/>
        <button t-on-click="remove">Remove</button>
    </div>`;
}