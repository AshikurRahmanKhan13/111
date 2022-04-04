import React from 'react';
import { Line, LineChart, Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [


        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]



    return (

        <LineChart width={800} height={500} data={data}>
            <Line dataKey={'investment'}></Line>
            <Line dataKey={'revenue'}></Line>
            <XAxis dataKey="month"></XAxis>
            <Tooltip />
            <YAxis></YAxis>
        </LineChart>

        // (<BarChart width={800} height={400} data={data}>
        //     <Bar dataKey="investment" fill="#8884d8" />
        //     <XAxis dataKey="month"></XAxis>
        //     <Tooltip />
        //     <YAxis></YAxis>
        // </BarChart>





    );
};



const Dashboards = () => {
    const data = [


        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]


    return (
        <BarChart width={800} height={400} data={data}>
            <Bar dataKey="investment" fill="#8884d8" />
            <XAxis dataKey="month"></XAxis>
            <Tooltip />
            <YAxis></YAxis>
        </BarChart>





    );
};






export default Dashboard;