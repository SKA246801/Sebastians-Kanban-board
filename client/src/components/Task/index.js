import react from 'react'
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid lightgrey;
    padding 8px;
    margin bottom 8px;
    border-radius: 2px;
`;

function Task(props) {
    return (
       <Container>{props.task.content}</Container> 
    );
}

export default Task;