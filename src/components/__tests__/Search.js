
import { render } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";


test("Search result on homepage",()=>{
   const body= render(<StaticRouter>
        <Provider store={store}>
        <Body/>
    </Provider>
    </StaticRouter>);
});
