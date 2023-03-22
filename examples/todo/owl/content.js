const {Component, useState, xml} = owl;

export class Content extends Component {
    setup() {
        this.state = useState({"todoText": ""});
        this.add = () => {
            this.env.bus.trigger("add-todo", this.state.todoText);
            this.state.todoText = "";
        }
    }

    static template = xml`
    <div id="content">
        <textarea t-model="state.todoText" cols="30" rows="5"/>
        <button t-on-click="add">Add</button>
    </div>
    `;
}