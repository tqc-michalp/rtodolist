import * as React from 'react';
import * as ReactDom from 'react-dom';

class Base extends React.Component<{}> {
    render() {
        return(
            <h2>ToDoList on React</h2>
            <p>Lets burn sth!</p>
        )
    }
}

ReactDom.render("entry-point", <Base />)