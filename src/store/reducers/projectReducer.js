const initState ={
    projects: [
        {id: '1', title: '1234', content:'asdfg'},
        {id: '2', title: '1235', content:'asdfg'},
        {id: '3', title: '1236', content:'asdfg'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) { 
        case 'CREATE_PROJECT':
            console.log('create project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }

} 

export default projectReducer