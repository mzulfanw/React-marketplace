import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomeContainer from './containers/Home/HomeContainer'
import './App.css'

function App() {
    return (
        <Routes>
            <Route path='/' element={               
                <HomeContainer/>
            } />
        </Routes>
    )
}

export default App
// import { Layout } from 'antd'
// import './App.css'
// import React from 'react'
// const { Header, Footer,  Content } = Layout

// const App = () => (
    
//     <Layout>
//         <Header>Header</Header>
//         <Content>Content</Content>
//         <Footer>Footer</Footer>
//     </Layout>

// )

// export default App