import React from 'react';
import ReactDOM from 'react-dom';
import homeActivity from './components/HomeActivity'
import page1Activity from './components/Page1Activity'
import searchActivity from './components/SearchActivity'
import loginActivity from './components/LoginActivity'
import userActivity from './components/UserActivity'
import authenticationTestActivity from './components/AuthenticationTestActivity'
import AppWithActivities from './components/AppWithActivities'

const activities = [
    homeActivity,
    page1Activity,
    loginActivity,
    authenticationTestActivity,
    searchActivity,
    userActivity,
]

ReactDOM.render(
    <AppWithActivities activities={activities} />,
    document.getElementById('root')
)