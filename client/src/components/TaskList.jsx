function TaskList({ tasks = [], onDelete, onToggle }) {
    if (!tasks || tasks.length === 0) {
        return <p>No tasks yet.</p>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <div key={task._id || task.id} style={styles.card}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                    <button onClick={() => onToggle && onToggle(task)}>
                        {task.status === "completed" ? "Mark Incomplete" : "Mark Completed"}
                    </button>
                    <button onClick={() => onDelete && onDelete(task._id || task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
        padding: "10px",
    },
};

export default TaskList;