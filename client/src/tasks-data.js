// we can reconstruct this data however we like this is just how they had it in one example

const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'take out garbage'},
        'task-2': { id: 'task-2', content: 'take out Sebastian to eat'},
        'task-3': { id: 'task-3', content: 'Watch Celtics Game'},
        'task-4': { id: 'task-4', content: 'Eat'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            tasksIds: ['task-1', 'task-2', 'task-3', 'task-4'], // Task ` appears in To column before task 2, thats the purpose of the array, to show what task and order
        },
    },

    // order of columns
    columnOrder: ['column-1'],
};

export default initialData;