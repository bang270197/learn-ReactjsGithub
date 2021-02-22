import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'complated'
        },
        {
            id: 3,
            title: 'Code',
            status: 'complated'
        },
    ]
    const [todoList,setTodoList] = useState(initTodoList);
    const [filteredStatus,setFilteredStatus] = useState('all');
    const handleTodoClick = (todo,idx) => {
        console.log(todo,idx);

        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'complated':'new'
        };

        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }
    const handleShowComplatedClick = () => {
        setFilteredStatus('complated');
    }
    const handleShowNewClick = () => {
         setFilteredStatus('new');
    }

    const renderTodoList = todoList.filter(todo => filteredStatus === 'all' ||
      filteredStatus === todo.status
    );
    console.log(renderTodoList);
    return (
        <div>
            <h3>Todo List</h3>
             <TodoList todoList={renderTodoList} 
             onTodoClick = {handleTodoClick}
             />
            <div>
                <button onClick = {handleShowAllClick}>Show All</button>
                <button onClick = {handleShowComplatedClick}>Show Complated</button>
                <button onClick = {handleShowNewClick}>Show New</button>
            </div> 
        </div>
    );
}

export default TodoFeature;