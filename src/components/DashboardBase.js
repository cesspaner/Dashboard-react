import { Title, Tab, Card, TabList, Text} from '@tremor/react'
import React, { useState } from 'react'
import CardGridMap from './CardGridMap'
import ChartDonut from './ChatDonut'
import RegistrosE from './RegistrosE'
import {HomeModernIcon} from '@heroicons/react/24/solid'



const DashboardBase = () => {
    const [selectedView, setSelectedView] = useState(1)

  return (
    <main className='bg-slate-200 p-6 sm:p-10'>
        <Title>Dashboard</Title>
        <Text> Dashboard para manejar recursos con React</Text>

        <TabList defaultValue={selectedView} handleSelect={ value => setSelectedView(value)} marginTop="mt-6">
            <Tab value={1} text="Principal" icon={HomeModernIcon} />
            <Tab value={2} text="Detalles" />
        </TabList>

        { selectedView === 1 ? (
        <>
                <Card>
                    <div className='h-28 bg-emerald-300'/>
                </Card>
                <ChartDonut/>
                <CardGridMap/>
            </>
         ):(
          <>
            <RegistrosE/>
          </>
         ) 
        }
    </main>
  )
}

export default DashboardBase