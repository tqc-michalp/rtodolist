import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TaskItem, Task } from './task/task';
import './app.scss';

class Base extends React.Component<{}> {
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
}

interface State {
    tasks: Array<Task>
}


// const Text = (e) => {
//     return(
//         <h3>{e.name}</h3>
//     )
// }

ReactDom.render(<Base />, document.getElementById('entry-point'));