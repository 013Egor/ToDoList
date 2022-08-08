import React from 'react';

import ToDoItems from './ToDoItems'; 
import DescribePanel from './DescribePanel';

class MainView extends React.Component {
    render() {

        return (
            <div id="toDoPanel">

                <ToDoItems item={this.props.records} handleTask={this.props.onCompleteTask} />
                
                <DescribePanel />
            </div>
        );
    }
}

export default MainView;