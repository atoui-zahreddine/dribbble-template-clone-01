

function Tasks() {
    return <div className="App-left-section-tasks">
        {[
            {text: "Document verification", size: 2, time: "3 min ago"},
            {text: "Newbie onboarding", size: 1, time: "5 days ago"},
            {text: "Images processing", size: 6, time: "1 h ago"},
            {text: "Mass payments", size: 7, time: "2 week ago"},
            {text: "ID verification", size: 1, time: "5 min ago"},
            {text: "Transcription", size: 2, time: "4 days ago"},
        ].map((value, index) => (
            <div className="task-container">
                <div className="tasks-desc">
                    <h4 className="task-title">{value.text}</h4>
                    <p className="task-date">{value.time}</p>
                </div>
                <span className="task-quantity">{value.size}</span>
            </div>
        ))}
    </div>;
}

export default Tasks;