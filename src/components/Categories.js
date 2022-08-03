import React from 'react'
import Category from './Category';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = ({title}) => {
  return (
    <div className=''>
    <Tabs>
    <h2>Popular in {title}</h2>
    <TabList>
      <Tab>All</Tab>
      <Tab>Carbohydrate</Tab>
      <Tab>Protein</Tab>
      <Tab>Fat</Tab>
    </TabList>
      <TabPanel>
        <Category name={'Calories'}/>
      </TabPanel>
      <TabPanel>
        <Category name={'Carbs'}/>
      </TabPanel>
      <TabPanel>
        <Category name={'Protein'}/>
      </TabPanel>
      <TabPanel>
        <Category name={'Fat'}/>
      </TabPanel>
    </Tabs>
    </div>
  )
}

export default Categories