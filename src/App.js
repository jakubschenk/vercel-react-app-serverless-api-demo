import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch("/api/user")
            .then((res) => res.json())
            .then((val) => setUser(val.user))
            .catch((err) => setError(err.message));
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("a", { href: "https://vitejs.dev", target: "_blank", children: _jsx("img", { src: viteLogo, className: "logo", alt: "Vite logo" }) }), _jsx("a", { href: "https://react.dev", target: "_blank", children: _jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })] }), _jsx("h1", { children: "Vite + React" }), _jsxs("div", { className: "card", children: [_jsxs("button", { onClick: () => setCount((count) => count + 1), children: ["count is ", count] }), _jsxs("p", { children: ["Edit ", _jsx("code", { children: "src/App.tsx" }), " and save to test HMR"] })] }), user && (_jsxs(_Fragment, { children: [_jsx("p", { children: "User:" }), _jsx("pre", { children: JSON.stringify(user, null, 2) })] })), error && (_jsxs(_Fragment, { children: [_jsx("p", { children: "Error:" }), _jsx("pre", { children: JSON.stringify(error, null, 2) })] })), _jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })] }));
}
export default App;
