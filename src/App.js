import React from "react";
import Accordion from "./components/Accordion";
import Link from "./components/Link";
import Route from "./components/Route";
import Sidebar from "./components/SideBar";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

const App = () => {

    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path={'/accordion'}>
                    <Accordion />
                </Route>
                <Route path={'/dropdown'}>
                    <DropdownPage />
                </Route>
                <Route path={'/buttons'}>
                    <ButtonPage />
                </Route>
                <Route path={'/modal'}>
                    <ModalPage />
                </Route>
                <Route path={'/table'}>
                    <TablePage />
                </Route>
            </div>
        </div>
    )
}

export default App;