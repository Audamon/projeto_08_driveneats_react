import Bottombar from "./Scripts/Bottombar";
import CheckOrder from "./Scripts/CheckOrder";
import Content from "./Scripts/Content";
import Top from "./Scripts/Top";

export default function App(){
    return(
        <>  
            <Top />
            <Content />
            <Bottombar />
            <CheckOrder />
        </> 
    );
    
}