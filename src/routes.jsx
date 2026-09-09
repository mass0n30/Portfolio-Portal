import App from "./App"; 
import Home from "./pages/Home"; 


const routes = [
  {
    path: "/", 
    element: <App />, 
    children: [
      {
        index: true, // default render
        element:<Home/>,         
      },
    ]
  },

];

export default routes;