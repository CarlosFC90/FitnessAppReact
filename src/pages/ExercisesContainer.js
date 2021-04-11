import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Fatalerror from './500';
import Exercises from './Exercises';
import useFetch from '../hooks/useFetch'
import url from  '../config'

const ExercisesContainer = () => {
    const { data, loading, error } = useFetch(`${url}/exercises`);

    if(loading) {
        return <Loading/>
    }
        
    if (error) {
        return <Fatalerror/>
    }
        
    return <Exercises
                data = {data} 
            />
}

export default ExercisesContainer;

