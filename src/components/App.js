import React from "react";
import Layout from "./Layout/Layout";
import AppBar from "./AppBar/AppBar";
import Form from "./Form/Form";

const App = () => {
     return(
        <Layout>
         <AppBar/>
         <Form/>
        </Layout>  
     )
}

export default App;