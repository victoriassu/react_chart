import React from 'react';
import { createdIssueTicketCntData, statistic_data } from './statistic_data';

import { BarChart, Bar, ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Recharts = () => {
    return (
        <>
            <div>BAR</div>
            <BarChart width={730} height={250} data={statistic_data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalCnt" stackId="b" fill="#8884d8" />
                <Bar dataKey="basicCnt" stackId="b" fill="#82ca9d" />
                <Bar dataKey="issueSolveCnt" stackId="b" fill="#3299fe" />
            </BarChart>

            <div>
                Composed Chart  
            </div>
            <ComposedChart width={730} height={550} data={createdIssueTicketCntData}>
                <XAxis dataKey="category" />
                <YAxis />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Bar yAxisId='right' stackId="a" dataKey="totalCnt" fill="#8884d8" />
                <Bar dataKey="basicCnt" stackId="a" fill="#82ca9d" />
                <Bar dataKey="issueSolveCnt" stackId="a" fill="#3299fe" />
                <Line yAxisId="left" type="monotone" dataKey="solveRate" stroke="#ff7300" />
                </ComposedChart>
        </>
    )
}

export default Recharts;