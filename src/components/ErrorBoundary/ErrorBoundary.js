import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : null
        }
    }

    static getDerivedStateFromError(error){
        return {hasError: error};
    }

    componentDidCatch(error, info) {
        console.log("Component Did Catch Error");
    }

    render(){
         return this.state.hasError
        ? <div style={{color:"red"}}>something went wrong...</div>
        : this.props.children
    }
}

export default ErrorBoundary;