import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
//components
import CreateStudent from './components/create-student.component';
import EditStudent from './components/edit-student.component';
import StudentList from './components/student-list.component';

const { Header, Content , Footer } = Layout;

function App() {
  return (
    <Router>
      <div className='App' style={{ height: '100%' }}>
        <Layout style={{ height: '100%' }}>
          <Header className='App-header'>
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
              <Menu.Item key='1'>
                <Link to="./">
                  React MERN Stack App
                </Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Link to="./create-student">
                  Create Student
                </Link>
              </Menu.Item>
              <Menu.Item key='3'>
                <Link to="./edit-student">
                  Edit Student
                </Link>
              </Menu.Item>
              <Menu.Item key='4'>
                <Link to="./student-list">
                  Student List
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, height: '100%' }}>
              <Switch>
                <Route exact path='/' component={CreateStudent} />
                <Route path='/create-student' component={CreateStudent} />
                <Route path='/edit-student' component={EditStudent} />
                <Route path='/student-list' component={StudentList} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Footer MERN Stack
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
