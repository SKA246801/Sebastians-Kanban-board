import react from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

// Change background color later
const Container = styled.div`
    border: 1px solid lightgrey;
    padding 8px;
    margin bottom 8px;
    border-radius: 2px;
    background-color: white;
`;

function Task(props) {
    console.log("in task function")
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {provided => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                >
                    {props.task.content}
                </Container> 
            )}
       </Draggable>
    )
}

export default Task