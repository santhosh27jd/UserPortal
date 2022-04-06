import React, {useEffect,useState} from 'react';
import { Button, Layout, Menu, Drawer, Upload } from 'antd';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import { PieChartOutlined } from '@ant-design/icons';
import { FileTextOutlined } from '@ant-design/icons';
import { MenuFoldOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';

import './App.css';

function Dashboard() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <h3 className="p-3 text-center">USER LIST</h3>
        <table>
          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                FIRST NAME
              </th>
              <th>
                LAST NAME
              </th>
              <th>
                EMAIL
              </th>
            </tr>
          </thead>
          <tbody>
         
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id} </td>
           <td>{item.name} </td>
           <td>{item.username} </td>
           <td>{item.email} </td>
          </tr>
        ))}
     
          </tbody>
        </table>
      </div>
     
    );
  }

}
function Report() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <h3 className="p-3 text-center">TODO LIST</h3>
        <table>
          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                USER ID
              </th>
              <th>
                TITLE
              </th>
              <th>
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
         
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id} </td>
           <td>{item.userId} </td>
           <td>{item.title} </td>
           <td>{item.completed} </td>
          </tr>
        ))}
     
          </tbody>
        </table>
      </div>
     
    );
  }
}

const { Header, Content, Footer, Sider } = Layout;

const App = () => (
  
  <div className="App">
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
        <Menu.Item key="1">
              <UserOutlined />
                <span>USER NAME</span>
                <Link to="/" />
              </Menu.Item>
        </Menu>
        <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
              <Menu.Item key="1">
              <PieChartOutlined />
                <span>Dashboard</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
              <FileTextOutlined />
                <span>Report</span>
                <Link to="/report" />
              </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
        <Header style={{ textAlign: "center" }}>
        <MenuFoldOutlined style={{ padding:'10px',fontSize: '16px', color: '#08c' }}/>
          <span style={{color:'white'}}> USER PORTAL</span>
        </Header>
        <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
           <Routes>
              <Route exact path="/" element={<Dashboard />} />
      <        Route path="/report" element={<Report />} />
           </Routes>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2016 Created by Santhosh
            </Footer>
        </Layout>
       </Layout>
       
    </Router>
    
  </div>
);export default App;