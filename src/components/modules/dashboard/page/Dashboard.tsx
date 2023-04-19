import React from 'react'
import Sidebar from '../../../ui/sideBar/Sidebar'
import DashboardContent from '../components/dasboardContent/DashboardContent'
import './index.scss';

type Props = {}

export default function Dashboard({}: Props) {
  return (
    <div className='dashboard'>
        <Sidebar/>
        <DashboardContent/>
    </div>
  )
}