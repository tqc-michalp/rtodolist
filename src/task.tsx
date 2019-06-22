import * as React from 'react';
import { format } from 'date-fns';

export const TaskItem = ({data, toggleTask}: TaskItemProps) => {

    return (
        <li className={data.done ? 'task done' : 'task' }>
            <input
                type='checkbox'
                checked={data.done}
                onClick={toggleTask}
            />
            {data.name} {format(data.date, 'YYYY-MM-DD')}
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
    data: Task;
    toggleTask: (task:Task) => void;
}