import {Content} from "./content.js";
import {Todo} from "./todo.js";

const {Component, EventBus, xml, mount, useState} = owl;

const env = {};
env.bus = new EventBus();

class Root extends Component {
    setup() {
        super.setup(...arguments);
        this.ID = 0;
        this.state = useState({"todoList": []});
        env.bus.addEventListener("add-todo", this.addTodo.bind(this));
        env.bus.addEventListener("remove-todo", this.removeTodo.bind(this));
    }

    addTodo(e) {
        if (!e.detail) return;
        this.state.todoList.unshift({id: this.ID++, text: e.detail});
    }

    removeTodo(e){
        this.state.todoList = this.state.todoList.filter(todo => todo.id !== e.detail);
    }

    willDestroy() {
        env.bus.removeEventListener("add-todo", this.addTodo.bind(this));
        env.bus.removeEventListener("remove-todo", this.removeTodo.bind(this));
    }

    static components = {Content, Todo};

    static template = xml`
    <main>
        <Content/>
        <div id="todo-list">
            <Todo t-foreach="state.todoList" t-as="todo" id="todo.id" text="todo.text" t-key="todo_index"/>
        </div>
    </main>`
}

mount(Root, document.body, {env});