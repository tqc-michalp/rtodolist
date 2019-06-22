import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TaskItem, Task } from './task';
import './css/app.scss';

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
        return(
            <>
                <h2>ToDoList on React</h2>
                <p>Hello World!</p>
                <ul>
                    {this.state.tasks.map( e =>  <TaskItem data={e} key={e.id} /> )}
                </ul>
            </>
        );
    }

    toggleTask(task) {

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
// ReactDom.render('#entry-point', <Base />);