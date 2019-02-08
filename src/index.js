import React from 'react';
import ReactDOM from 'react-dom';
import homeActivity from './components/HomeActivity'
import page1Activity from './components/Page1Activity'
import searchActivity from './components/SearchActivity'
import AppWithActivities from './components/AppWithActivities'

const activities = [
    homeActivity,
    page1Activity,
    searchActivity
]

ReactDOM.render(
    <AppWithActivities activities={activities} />,
    document.getElementById('root')
)