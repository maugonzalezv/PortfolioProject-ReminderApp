import React from "react";

export default function TicketItem({ticket, dispatch}){
    
    const {id, title, description, priority} = ticket; 

    const priorityClass = {
        1: "priority-low",
        2: "priority-medium",
        3: "priority-high"
    }

    const priorityLabels = {
        1: "Low",
        2: "Medium", 
        3: "High"
    }

    return(
        <div className="ticket-item">
            <div className="ticket-header">
                <div className="ticket-title-section">
                    <h3 className="ticket-title">{title}</h3>
                    <div className="priority-badge">
                        <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>
                        <span className={`priority-label ${priorityClass[ticket.priority]}`}>
                            {priorityLabels[priority]}
                        </span>
                    </div>
                </div>
            </div>
            
            {description && (
                <div className="ticket-description">
                    <p>{description}</p>
                </div>
            )}

            <div className="ticket-actions">
                <button 
                    className="button button-edit" 
                    onClick={()=> dispatch({type: "SET_EDITING_TICKET", payload: ticket})}
                >
                    ✏️ Edit
                </button>
                
                <button 
                    className="button button-delete" 
                    onClick={()=> dispatch({type: "DELETE_TICKET", payload: {id}})}
                >
                    🗑️ Delete
                </button>
            </div>
        </div>
    )
};
