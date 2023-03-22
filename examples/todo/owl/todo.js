const {Component, xml} = owl;

export class Todo extends Component {
    removeTodo() {
        this.env.bus.trigger("remove-todo", this.props.id)
    }

    static props = ["id", "text"];

    static template = xml`
    <div class="todo">
        <p t-out="props.text"/>
        <button t-on-click="removeTodo">Remove</button>
    </div>`;
}