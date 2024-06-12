import Header from "./Components/Header";
import List from "./Components/list";

function Watch(){
    return(
      <div>
        <Header />
        <br/>
        <div className='container'>
          <List />
        </div>
      </div>
    );
}
export default Watch;