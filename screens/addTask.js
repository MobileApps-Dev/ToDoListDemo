import { useContext, useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Action } from "./taskReducer"

const AddTaskComponent = () => {

    const { dispatch } = useContext(TaskContext)
    const [description, setDescription] = useState('')

    const onAddTask = () => {
        dispatch({
            type: Action.ADD_TASK,
            task: {
                id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now())),
                isCkecked: false,
                description: description

            }
        })
        setDescription('')
    }

    return (

        <View style={styles.container}>
            <TextInput
                onChangeText={text => setDescription(text)}
                value={description}
                placeholder="Enter New Task"
                // borderWidth={1}
                // boederRadius={8}
                // height={50}
                // width="70%"
                padding={5}
                backgroundColor='white'

            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={onAddTask}
                >
                    <Text style={{ color: 'white' }}>
                        Add Task
                    </Text>
                </TouchableOpacity>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 20,
    },
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#007bff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10,
        padding: 10,

    }
})

export default AddTaskComponent