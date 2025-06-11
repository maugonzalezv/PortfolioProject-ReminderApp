export const sortTickets = (tickets, preference) => {
    switch(preference){
        case "High to Low":
            return [...tickets].sort((a, b) => parseInt(b.priority) - parseInt(a.priority))

        case "Low to High":
            return [...tickets].sort((a, b) => parseInt(a.priority) - parseInt(b.priority))
            
        default:
            return tickets
    }
}