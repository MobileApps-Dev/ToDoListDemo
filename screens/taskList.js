import { useContext } from "react"
import { TaskContext } from "./taskProvide"
import { Action } from "./taskReducer"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import CheckBox from "@react-native-community/checkbox"

const TaskListComponent = () => {

    const { state, dispatch } = useContext(TaskContext)

    const onChecked = (id, isChecked) => {
        dispatch({
            type: Action.CHECK_TASK,
            task: {
                id, isChecked
            }
        })
    }

    const removeTask = (taskId) => {
        dispatch({
            type: Action.REMOVE_TASK,
            task: {
                id: taskId
            }
        })
    }

    const renderItem = ({ item }) => {

        return (<View style={styles.itemContainer}>
            <CheckBox
                disabled={false}
                value={item.isChecked}
                lineWidth={2}
                boxType="square"
                style={{ height: 20, width: 20, padding: 10, marginHorizontal: 5 }}
                onValueChange={() => {
                    onChecked(item.id, !item.isChecked)
                }}
            />

            <Text style={styles.text}>{item.description}</Text>
            <TouchableOpacity
                onPress={() => removeTask(item.id)}
            >
                <Text styles={styles.rightText}>X</Text>
            </TouchableOpacity>

        </View>
        )
    }

    return (
        <FlatList
            data={state}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

const styles = StyleSheet.create({

    listContainer: {
        padding: 10,
        marginTop: 10,

    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
    },
    text: {
        flex: 1,
        marginHorizontal: 10,
    },
    rightText: {
        fontSize: 20,
        color: 'black',
        textAlign: 'right',
        padding: 10,
    }
})

export default TaskListComponent

