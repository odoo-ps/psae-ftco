const {Component, useState, xml} = owl;

export class Content extends Component {
    setup() {
        this.state = useState({"text": ""});
        this.add = () => {
            this.env.bus.trigger("add-to-do", this.state.text);
            this.state.text = "";
        }
    }

    static template = xml`
    <div id="content">
        <textarea t-model="state.text" cols="30" rows="5"/>
        <button t-on-click="add">Add</button>
    </div>
    `;
}