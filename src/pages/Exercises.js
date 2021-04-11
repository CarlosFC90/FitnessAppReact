import React from 'react';
import ExerciseList from '../components/ExerciseList';
import Welcome from '../components/Welcome';
import AddButton from '../components/AddButton';
import ExercisesContainer from './ExercisesContainer';

const Exercises = ({data}) => (
    <React.Fragment>
            <Welcome
                userName="Fede"
            />
            <ExerciseList
                exercises={data}
            />
            <AddButton/>
    </React.Fragment>
)

export default Exercises;