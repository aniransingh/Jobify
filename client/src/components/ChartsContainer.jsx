import React, { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useAppContext } from '../context/AppContext';
import Wrapper from '../assets/wrappers/ChartsContainer';

export default function ChartsContainer() {
    const [barChart, setBarChart] = useState(true);
    const { monthlyApplications: data } = useAppContext();

    return (
        <Wrapper>
            <h4>Monthly Applications</h4>
            
            <button className='chart-button' type='button' onClick={() => setBarChart(!barChart)}>
                {barChart ? 'Bar Chart' : 'Area Chart'}
            </button>
            {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
        </Wrapper>
    );
}
