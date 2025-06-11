import React, {useState, useEffect} from "react";

export default function TicketForm({dispatch, editingTicket}){

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [priority,setPriority] = useState('1');

    useEffect(() => {

        if(editingTicket){
            setTitle(editingTicket.title)
            setDescription(editingTicket.description)
            setPriority(editingTicket.priority)

        } else{
            clearForm();
        }

    }, [editingTicket])

    const priorityLabels = {
        1:'Low',
        2:'Medium',
        3:'High'
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!title.trim()) {
            alert('Please enter a title for your reminder');
            return;
        }

        const ticketData = {
            id: editingTicket ? editingTicket.id : new Date().toISOString(),
            title: title.trim(),
            description: description.trim(),
            priority,
        };

        dispatch({
            type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
            payload: ticketData
        });

        clearForm();
    }

    const handleCancel = () => {
        dispatch({type: "CLEAR_EDITING_TICKET"})
        clearForm();
    }

    return (
        <form onSubmit={handleSubmit} className="ticket-form">
            <div>
                <label>Title</label>
                <input 
                type="text" 
                value={title} 
                className="form-input" 
                onChange={e => setTitle(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Description </label>
                <textarea 
                value={description} 
                className="form-input" 
                onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div>
                <fieldset className="priority-fieldset">
                    <legend>Priority</legend>
                    {
                        Object.entries(priorityLabels).map(([value, label]) => (
                        <label 
                        key={value} 
                        className="priority-label">
                            <input 
                            className="priority-input" 
                            type="radio" 
                            name="priority"
                            value={value} 
                            checked={priority === value}
                            onChange={e => setPriority(e.target.value)}
                            />
                        {label}
                    </label>

                    ))}

                </fieldset>

                {editingTicket && (
                    <button type="button" className="button" onClick={handleCancel}>Cancel Edit </button>
                )}

                <button type="submit" className="button">Submit</button>

                
            </div>

        </form>

    );
}