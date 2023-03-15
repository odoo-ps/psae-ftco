class Content extends Component {
    setup() {
        this.state = useState({"text": ""});
        this.click = () => {
            this.env.bus.trigger("add-to-do", this.state.text);
            this.state.text = "";
        }
    }

    static template = xml`
    <div id="content">
        <textarea t-model="state.text" cols="30" rows="5"/>
        <button t-on-click="click">Add</button>
    </div>
    `;
}