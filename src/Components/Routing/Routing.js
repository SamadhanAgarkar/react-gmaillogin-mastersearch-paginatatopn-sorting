import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeComponent } from "../HomePageComponent/HomePageComponent";
import { ProductDetailsPage } from "../ProductDetailsPage/ProductDetailsPage";
import { ProductListComponent } from "../ProductListComponent/ProductListComponent";

export const RoutingComponent = ()=>{
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/product" component={ProductListComponent} ></Route>
                    <Route exact path="/home" component={HomeComponent} ></Route>
                    <Route exact path="/productdetails/:id" component={ProductDetailsPage}></Route>
                    <Route exact path="/" component={HomeComponent} ></Route>
                </Switch>
            </BrowserRouter>
        </>
    )
    
}