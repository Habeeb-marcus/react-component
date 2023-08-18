const WelcomeMessage = (props) => {
const {name} = props;
    return (
        <div>
            <h1>Welcome to my world {name}</h1>
        </div>
    )
}

export default WelcomeMessage;