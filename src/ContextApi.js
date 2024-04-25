const { createContext, useContext } = require("react");


const context = createContext();

function useValue() {
    const value = useContext(context);
    return value;
}

function CustomContext({children}) {
    return (
        <context.Provider value={
            "string"
        } >
            {children}
        </context.Provider>
    )
}

export {useValue};
export default CustomContext;