import React from 'react'
import { useState , useEffect} from "react"
import axios from "axios"
import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import '../components/Pie/Style.css'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import PieChart from "../components/Pie/Pie";
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'
import { Component } from 'react/cjs/react.development'
import { UserData } from "../components/Pie/Data";



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

 function Idk () {

    const [posts,setPosts]=useState([]);
   useEffect(()=>{
   
    axios.get('http://localhost:5000/ape/signale')
    .then(res=> setPosts(res.data) 
     )
    .catch(error=> console.log(error))
  });



  useEffect(() => {
    const fetchSamplings = async () => {
        const res = await fetch("http://localhost:5000/ape/signale")
        const data = await res.json();
        
        setChartData({
            labels: ["Agence de setif","Agence de dely ibrahim","Agence de Dar el baida ","Agence de constantine ",
            "Agence d'oran " ],
            datasets: [{
                label: "Data",
                data: data.map((sampling) => sampling.type) , 
                backgroundColor: [
                    'rgb(255, 99, 132)',
                   'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 4, 132)',
                    'rgb(54, 162, 235)',
                     'rgb(255, 205, 86)'
                  ],
                  rotation:4,
                 
                  borderColor: "white",
                  borderWidth: 4,                  
            }], 
          
        });
    }
    fetchSamplings();        
}, [])

const [chartData, setChartData] = useState({
    datasets: [],
});
 
 /* const data = ({
    labels: posts.map((data) => data.Type),
    datasets: [
      {
        label: "Users Gained",
        data: posts.map((data) => data.Agence),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#2F2F88",
          "#50AF95",
          "#FF9066",
          "#2a71d0",
        ],
        rotation:5,
       
        borderColor: "white",
        borderWidth: 4,
      },
    ],
  });*/

  
  return (
    <div className="row">
     <div className='ChartPie'>
     <PieChart className="ChartPieCom"
     chartData={chartData} />
        
     </div>
     <div className="col-4 hide-md">
     <SummaryBoxSpecial  item={data.revenueSummary} />
     </div>
   
                    <div className="idkss">
                        <Box>
                        <RevenueByMonthsChart />
                        </Box>
                    </div>
                
     <DashboardWrapperRight>
              
                <div className="title mb">Overall</div>
                <div className="mb">
                    <OverallList />
                </div>
                
                <div className="title mb">Type de Rendez-vous</div>
                <div className="mb">
                    <RevenueList />
                </div>
            </DashboardWrapperRight> 
            <br/>
         
    </div>
);
}

export default Idk
const RevenueByMonthsChart = () => {
  const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          xAxes: {
              grid: {
                  display: false,
                  drawBorder: false
              }
          },
          yAxes: {
              grid: {
                  display: false,
                  drawBorder: false
              }
          }
      },
      plugins: {
          legend: {
              display: false
          },
          title: {
              display: false
          }
      },
      elements: {
          bar: {
              backgroundColor: "#101077",
              borderRadius: 20,
              borderSkipped: 'bottom'
          }
      }
  }

  const chartData = {
      labels: data.revenueByMonths.labels,
      datasets: [
          {
              label: 'Revenue',
              data: data.revenueByMonths.data
          }
      ]
  }
  return (
      <>
          <div className="title mb">
              Rendez-vous par heure
          </div>
          <div>
              <Bar options={chartOptions} data={chartData} height={`300px`} />
          </div>
      </>
  )
}
