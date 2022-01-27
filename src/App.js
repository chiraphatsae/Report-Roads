
import Topbar from "./component/topbar/Topbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import Routing from "./Routing";
function App() {
  return (
    <div  >
      <Topbar />
      <div ><Routing /></div>
    </div>

  );
}

export default App;
