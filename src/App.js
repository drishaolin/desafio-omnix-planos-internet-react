import styled from "styled-components";
import Routes from "./pages/Routes";

const BgCircle = styled.div`
    z-index: -1;
    position: absolute;
    border-radius: 100%;
    background: linear-gradient(0deg, #5cbac780 0%, #fafcea 100%);
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    left: ${(props) => props.left};
`;

function App() {
    return (
        <div>
          <BgCircle height="90rem" width="90rem" bottom="-45rem" left="-55rem"/>;
          <BgCircle height="50rem" width="50rem" top="-25rem" right="-25rem" />;
          <BgCircle height="20rem" width="20rem" bottom="-10rem" right="5%" />;
          <BgCircle height="30rem" width="30rem" top="-5rem" right="35%" />;
          <Routes/>
        </div>
    );
}

export default App;
