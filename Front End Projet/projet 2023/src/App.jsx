import './App.scss';

import Head from './components/head/head';
import NavBar from './components/navbar/navbar';
import Body from './components/body/body';
import Footer from './components/footer/footer';

function App() {

  return (
    <body className='font'>
      <Head />
      <NavBar />
      <Body />
      <Footer />
    </body>
  );

}

export default App;
