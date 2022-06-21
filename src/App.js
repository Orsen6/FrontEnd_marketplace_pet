import React, {useState} from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import MyButton from './components/UI/Button/MyButton.jsx';
import MyModal from './components/UI/MyModal/MyModal.jsx';
import classes from './style.module.scss'

function App() {

  const [visible, setVisible] = useState({ 
    registerModal: false,
    loginModal: false
  });

  const [posts, setPosts] = useState([
    {title: 'Сорочка', id: 1},
    {title: 'Джімси', id: 2},
    {title: 'Футболка', id: 3},
    {title: 'Майка', id: 4},
  ]);
  
  return(
    <div className="App">
      <Header visible={[visible.registerModal, visible.loginModal]} setVisible={setVisible}/>
      <Main posts={posts}>

      </Main>
      <MyModal visible={visible.registerModal} setVisible={setVisible}>
        <RegisterForm />
      </MyModal>
      <MyModal visible={visible.loginModal} setVisible={setVisible}>
        <div>123</div>
      </MyModal>
    </div>
  );
}

export default App;