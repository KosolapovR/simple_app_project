import React, { AllHTMLAttributes, useCallback, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './app.scss'

interface IAppProps extends AllHTMLAttributes<any>{

}

const App = ({children}: IAppProps) => {
  const [tsmp, setTsmp] = useState<number>(new Date().getSeconds())

  const handleClick = useCallback(() => {
    setTsmp(new Date().getSeconds())
  }, [])

  return (
    <div style={{backgroundColor: 'red'}}><nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
    >
      <Link to="/registration">registration</Link> |{" "}
      <Link to="/login">login</Link>
    </nav>
      <Outlet/></div>
  );
};

export default App;
