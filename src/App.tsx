import React from 'react'
import { Store } from 'redux'
import { History } from 'history'
import { Explorer } from './containers'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

interface MainProps {
  store: Store<ApplicationState>
}

const App: React.FC<MainProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Explorer />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
