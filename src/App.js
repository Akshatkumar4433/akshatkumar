import Navigation from './navigation/Navigation';
import './App.css';

function App() {
  const sideVariants = {
    closed: {
       transition: {
         staggerChildren: 0.2,
         staggerDirection: -1
       }

    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      }

    }
  };
  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: {
       opacity: 1
    }
  }
  return (
    <>
      <Navigation
          sideVariants = {sideVariants}
      />
    </>
  );
}

export default App;
