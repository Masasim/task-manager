// components/TaskList.tsx
import React from 'react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div className="list-group">
      {tasks.map(task => (
        <div 
          key={task.id} 
          className="list-group-item d-flex align-items-center"
        >
          <div className="form-check me-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              id={`task-${task.id}`}
            />
            <label 
              className="form-check-label"
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              htmlFor={`task-${task.id}`}
            >
              {task.title}
            </label>
          </div>
          <button 
            onClick={() => onDeleteTask(task.id)}
            className="btn btn-danger btn-sm ms-auto"
          >
            Видалити
          </button>
        </div>
      ))}
    </div>
  );
};