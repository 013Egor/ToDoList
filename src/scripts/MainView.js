import React from 'react';

import ToDoItems from './ToDoItems'; 
import DescribePanel from './DescribePanel';

class MainView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cur: {name: "", description: "", id: undefined}
        }
        this.handleCurrentRecord = this.handleCurrentRecord.bind(this);
        this.onChangeRecord = this.onChangeRecord.bind(this);
    }

    handleCurrentRecord(name, description, id) {
        this.setState({cur: {name: name, description: description, id: id}});
    }

    onChangeRecord(item) {
        this.props.handleChangeRecord(item);
    }

    render() {

        return (
            <div id="toDoPanel">

                <ToDoItems item={this.props.records} handleTask={this.props.onCompleteTask} handleCurrentRecord={this.handleCurrentRecord} />
                
                <DescribePanel item={this.state.cur} handleChangeRecord={this.props.handleChangeRecord} />
            </div>
        );
    }
}

export default MainView;