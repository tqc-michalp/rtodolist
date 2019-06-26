import * as React from 'react';
import { format } from 'date-fns';

export const TaskItem = ({task, toggleTask}: TaskItemProps) => {

    return (
        <li className={task.done ? 'task done' : 'task' }>
            <input
                type='checkbox'
                checked={task.done}
                onClick={ () => toggleTask() }
            />
            {task.name} {format(task.date, 'YYYY-MM-DD')}
        </li>
    )
};

export interface Task {
    id: number;
    name: string;
    date: number;
    done: boolean;
}

export interface TaskItemProps {
    task: Task;
    toggleTask: () => void;
}
