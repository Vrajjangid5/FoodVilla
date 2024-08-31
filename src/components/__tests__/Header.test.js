import HeaderContent from "../HeaderContent";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/Store";
import {StaticRouter} from "react-router-dom/server"

test("logo should load on rendering header",()=>{
    //logo header
    const header =render(<StaticRouter>
        <Provider store={store}><HeaderContent/></Provider>
    </StaticRouter>);
   const logo=header.getAllByTestId("logo");
   expect(logo[0].src).toBe("http://localhost/dummy.jpg");



});

test("check the cart have 0 item",()=>{
    //logo header
    const header =render(<StaticRouter>
        <Provider store={store}><HeaderContent/></Provider>
    </StaticRouter>);
   const cart=header.getAllByTestId("cartt");
   expect(cart.innerHTML).toBe("0");



});