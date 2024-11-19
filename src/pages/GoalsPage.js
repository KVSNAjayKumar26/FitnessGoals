import React, { useState } from 'react'
import styled from 'styled-components';

const GoalsPage = () => {
    const [goals, setGoals] = useState([]);
    const [goal, setGoal] = useState("");

    const addGoal = () => {
        if (goal.trim()) {
            setGoals([...goals, goal]);
            setGoal("");
        }
    };

  return (
    <Container>
        <h2>Set Your Fitness Goals</h2>
        <InputWrapper>
        <input
        type='text'
        placeholder='Enter your goal'
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        />
        <button onClick={addGoal}>Add Goal</button>
        </InputWrapper>
        <GoalsList>
            {goals.map((g, index) => (
                <li key={index}>{g}</li>
            ))}
        </GoalsList>
    </Container>
  );
};

const Container = styled.div`
text-align: center;
padding: 2rem;
`;

const InputWrapper = styled.div`
margin: 1rem;
input {
padding: 0.5rem;
width: 60%;
margin-right: 0.5rem;
}
button {
padding: 0.5rem 1rem;
background-color: #6a11cb;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;

&:hover {
background-color: #2575fc;
}
}
`;

const GoalsList = styled.ul`
margin-top: 2rem;
list-style: none;
li {
margin: 0.5rem 0;
background: #f4f4f4;
padding: 0.5rem;
border-radius: 5px;
}
`;

export default GoalsPage;