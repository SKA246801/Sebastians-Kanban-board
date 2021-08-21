const cards = [
    {
        id: 'card-1',
        content: 'Learning how to cook',
    },
    {
        id: 'card-2',
        content:'making a sandwich',
    },
    {
        id: 'card-3',
        content: 'taking out the trash',
    },
]

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Todo',
            cards,
        },
    },
    listIds: ['list-1'],
}

export default data;