import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TaskItem, Task } from './task/task';
import {NewTask} from "./task/new-task";
import './app.scss';

class App extends React.Component<{}, State> {
    public state: State = {
        tasks:
            [
                {
                    id: 1,
                    name: 'Eng',
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
                    name: 'walk',
                    date: Date.now(),
                    done: false
                }
            ]
    }

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
}

interface State {
    tasks: Array<Task>
}


// const Text = (e) => {
//     return(
//         <h3>{e.name}</h3>
//     )
// }

ReactDom.render(<App />, document.getElementById('entry-point'));