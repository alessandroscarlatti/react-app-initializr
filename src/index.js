import React from 'react';
import ReactDOM from 'react-dom';
import homeActivity from './components/HomeActivity'
import page1Activity from './components/Page1Activity'
import searchActivity from './components/SearchActivity'
import loginActivity from './components/LoginActivity'
import AppWithActivities from './components/AppWithActivities'

const activities = [
    homeActivity,
    page1Activity,
    loginActivity,
    searchActivity,
]

ReactDOM.render(
    <AppWithActivities activities={activities} />,
    document.getElementById('root')
)