import {Component} from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {error: null};
    }

    componentDidCatch(error, errorInfo) {
        console.log({error, errorInfo});
    }

    static getDerivedStateFromError(error) {
        return {error};
    }

    render() {
        if (this.state.hasError) {
            return <div>wrong</div>;
            return this.props.children;
        }
    }
}