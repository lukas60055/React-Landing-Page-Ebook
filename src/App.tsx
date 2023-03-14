import Navbar from './components/Header/Navbar/Navbar';
import Header from './components/Header/Header';
import WhyIt from './Section/WhtIt/WhyIt';
import ForWhom from './Section/ForWhom/ForWhom';
import About from './Section/About/About';
import Inside from './Section/Inside/Inside';
import Wants from './Section/Wants/Wants';
import Opinions from './Section/Opinions/Opinions';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main>
        <WhyIt />
        <ForWhom />
        <About />
        <Inside />
        <Opinions />
        <Wants />
      </main>
      <Footer />
    </>
  );
};

export default App;
