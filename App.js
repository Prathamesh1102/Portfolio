import React, {Suspense} from "react";
import ReactDom from "react-dom/client";
import Header from "./Components/Header.js"
const AppLayout = () => {
    return (
    <Suspense>
    <Header />
    </Suspense>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)