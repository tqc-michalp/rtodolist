import * as React from 'react';
import {ChangeEvent} from "react";

export class NewTask extends React.Component<NewTaskProps, State> {
    public state: State = {
      incoming: ''
    }
    render() {
        return (
            <>
                <input
                    value={this.state.incoming}
                    onChange={ event => { this.updateIncoming(event) }}
                />
                <button
                    onClick={ () => { this.props.addTask(this.state.incoming) } }
                >
                    Add task
                </button>
            </>
        )
    }

    updateIncoming(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            incoming: e.target.value
        })
    }

}

interface NewTaskProps {
    addTask: (taskName: string) => void;
}

interface State {
    incoming: string;
}
