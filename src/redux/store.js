import { createStore } from 'redux'



const reducer = (prevState = { show: undefined }, action = {}) => {
    console.log(action)
    let newState = { ...prevState }
    switch (action.type) {
        case "kerwin": newState.show = false
            return newState
        case "okkk": newState.show = true
            return newState

        default:
            return prevState
    }
}

const store = createStore(reducer)




// function myStore (reducer) {
//     var list = []
//     var state = reducer
//     function subscribe (callback) {
//         list.push(callback)

//     }
//     function dispatch (action) {

//         state = reducer(state, action)
//         for (var i in list) {
//             list[i] && list[i]()
//         }

//     }
//     function getState () {
//         return state
//     }

//     return {
//         subscribe, dispatch, getState
//     }
// }



export default store