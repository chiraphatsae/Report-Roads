
import Topbar from "./component/topbar/Topbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import Routing from "./Routing";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div  >
      <Toaster/>
      <Topbar />
      <div ><Routing /></div>
    </div>

  );
}

export default App;
