import { FC } from 'react';

interface TodoProps {
    text: string;
    complete: boolean;
    onDelete: () => void;
    onComplete: () => void;
}

const Todo: FC<TodoProps> = ({text, complete, onDelete, onComplete}) => (
    <div>
        <span style={{ textDecoration: complete ? 'line-through' : undefined }}>
            {text}
        </span>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onComplete}>Complete</button>
    </div>
);

export default Todo;