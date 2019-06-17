import * as React from 'react';
import * as ReactDom from 'react-dom';

class Base extends React.Component<{}> {
    // const list = [
    //     {a: 1,
    //     b: 2
    //     }
    // ]
    render() {
        return(
            <>
                <h2>ToDoList on React</h2>
                <p>test</p>
                {/*<ul>*/}
                {/*list.map( e =>  <li>{e.name}</li> )*/}
                {/*</ul>*/}
            </>
        );
    }
}

ReactDom.render(<Base />, document.getElementById('entry-point'));
// ReactDom.render('#entry-point', <Base />);