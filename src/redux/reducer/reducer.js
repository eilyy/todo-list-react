const initialState = {
    tasks: [],
    loading: true,
    error: false,
    lang: '',
    favFilter: false,
    theme: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TASKS_LOADED':
            return {
                ...state,
                tasks: action.payload,
                loading: false
            };
        case 'TASKS_REQUESTED':
            return {
                ...state,
                tasks: state.tasks,
                loading: true,
                error: false
            };
        case 'TASKS_ERROR':
            return {
                ...state,
                tasks: state.tasks,
                loading: false,
                error: true
            };
        case 'TASK_POSTED':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'TASK_DELETED':
            const i = state.tasks.findIndex(task => task.id === action.payload);
            return {
                ...state,
                tasks: [...state.tasks.slice(0, i), ...state.tasks.slice(i + 1)]
            }
        case 'TASK_UPDATED':
            const index = state.tasks.findIndex(task => task.id === action.payload.taskId);
            return {
                ...state,
                tasks: [...state.tasks.slice(0, index),
                    {...state.tasks[index], ...action.payload.data},
                    ...state.tasks.slice(index + 1)]
            }
        case 'LANG_SWITCHED':
            return {
                ...state,
                lang: action.payload
            };
        case 'FILTER_SWITCHED':
            return {
                ...state,
                favFilter: action.payload
            };
        case 'THEME_SWITCHED':
            return {
                ...state,
                theme: action.payload
            };
        default:
            return state;
    }
}

export default reducer;