const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessage
            }

            state.messagesData.push(newMessage)
            state.newMessage = ''
            return state
        case UPDATE_MESSAGE_TEXT:
            state.newMessage = action.text
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE})
export const updateMessageTextAC = (text) => ({type: UPDATE_MESSAGE_TEXT, text})

export default dialogsReducer