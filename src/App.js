import Header from './components/header';
import ListarTarefa from './pages/tarefa/ListarTarefa';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#d32f2f;',
    }
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <ListarTarefa />
      </ThemeProvider>
    </div>
  );
}

export default App;
