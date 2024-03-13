import { StyleSheet, View } from "react-native"
import AddTaskComponent from "./addTask"
import TaskListComponent from "./taskList"

const TaskDetails =()=>{
    return(
        <View style={styles.container}>

            <View style={{height:"85%"}}>
                <TaskListComponent/>
            </View>
            <AddTaskComponent/>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        justifyContent:'space-between',
        marginTop:10,
    }
})

export default TaskDetails