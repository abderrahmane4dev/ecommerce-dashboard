import React from 'react'
import { useState } from "react"
import { Bar } from 'react-chartjs-2'
import Box from '../components/box/Box'
import '../components/Pie/Style.css'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
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
 
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
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
  });

  
  return (
    <div className="row">
     <div className='ChartPie'>
     <PieChart className="ChartPieCom"
     chartData={userData} />
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
