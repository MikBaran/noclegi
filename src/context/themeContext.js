import React from "react";

const ThemeContext = React.createContext({
    color: 'primary',
    onChange: () => {}
});

export default ThemeContext;