import React from 'react';

export default function Tasklists({ tasks,fetchTask }) {
    const handleUpdate = async (task,id) => {
        try {
            const response = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...task, completed: !task.completed }),
            });
            if (response.ok) {
                console.log('Task updated successfully');
                // Optionally, you can refresh the task list here
                fetchTask()
            } else {
                console.error('Failed to update task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Task deleted successfully');
                // Optionally, you can refresh the task list here
                fetchTask()
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            {tasks.map((task, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                    <h3>Title: {task.title}</h3>
                    <p>Description: {task.description}</p>
                    <p><strong>Completed:</strong> {task.completed ? 'True' : 'False'}</p>
                    <p><strong>Due Date:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>
                    <p><strong>Priority:</strong> {task.priority}</p>
                    <button onClick={() => handleUpdate(task,task._id)}>Update</button>
                    <button onClick={() => handleDelete(task._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
