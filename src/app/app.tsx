import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TaskItem, Task } from './task/task';
import {NewTask} from "./task/new-task";
import './app.scss';

class App extends React.Component<{}, State> {
    public state = getInitialState();

    render() {
        return (
            <>
                <h2>ToDoList on React</h2>
                <p>Hello World!</p>
                <p>
                    <NewTask addTask={ (name: string) => { this.addTask(name) } } />
                </p>
                <ul>
                    {this.state.tasks.map(e => <TaskItem key={e.id} task={e} toggleTask={ () => { this.toggleTask(e) } } />)}
                </ul>
            </>
        );
    }

    toggleTask(task: Task) {
        this.setState({
            tasks: this.state.tasks.map((t) => {
                if (t == task) {
                    return {
                        ...task,
                        done: !task.done
                    }
                }
                return t;
            })
        });
    }

    addTask(task: string) {
        const tasks = this.state.tasks;
        this.setState({
            tasks: tasks.concat(
                {
                    id: tasks[tasks.length - 1].id + 1,
                    name: task,
                    date: Date.now(),
                    done: false
                }
            )
        });
    }

    componentDidUpdate() {
        saveState(this.state);
    }
}

const localStorageKey = 'bndkwyshwhndvuuuhrqqv';

function getInitialState() {
    const data = localStorage.getItem(localStorageKey);
    if (data){
        return JSON.parse(data);
    }else {
        return { tasks: [
            {
                id: 1,
                name: 'eng',
                date: Date.now(),
                done: true
            },
            {
                id: 2,
                name: 'gym',
                date: Date.now(),
                done: false
            },
            {
                id: 3,
                name: "¯\\_(ツ)_/¯",
                date: Date.now(),
                done: false
            }
        ]}
    }
}

function saveState(state: State) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
}

interface State {
    tasks: Array<Task>
}

ReactDom.render(<App />, document.getElementById('entry-point'));