export const Action = {
    ADD_TASK: "add_task",
    CHECK_TASK: "check_task",
    REMOVE_TASK: "remove_task",
}

export default taskReducer = (state, action) => {

    switch (action.type) {
        case Action.ADD_TASK: {
            return [...state, action.task]
        }
        case Action.CHECK_TASK: {
            return state.map(task => (task.id === action.task.id ? { ...task, isChecked: action.task.isChecked } : task))
        }
        case Action.REMOVE_TASK: {
            return state.filter(task => task.id !== action.task.id)
        }


        default:
            return state
    }



}