import { createContext, useReducer } from "react"
import taskReducer from "./taskReducer"


const initialState=[]

export const TaskContext = createContext()

const TaskContextProvider =({children})=>{

    const [state,dispatch ] = useReducer(taskReducer,initialState)

    return(
        <TaskContext.Provider value={{state,dispatch}}>
            {children}
        </TaskContext.Provider>
    )

}

export default TaskContextProvider