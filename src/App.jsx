import './App.css'
import '@progress/kendo-theme-default/dist/all.css'
import Layout from "./layouts";
import NavSearch from "./components/sections/NavSearch";
import ContentCenter from "./components/sections/ContentCenter";

function App() {
    return (
        <Layout
            nav={<NavSearch/>}
            content={<ContentCenter/>}
        />
    )
}

export default App
