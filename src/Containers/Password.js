import React, {Component} from "react";
import Input from '../Components/Input'
import Bar from '../Components/Bar'

const zxcvbn = require("zxcvbn")
class Password extends Component {
    state = {
        value: "",
        suggestion: "",
        bgColor: "",
        width: "0",
        strength: "Enter Your Password"
    }

    handleChange = ({currentTarget: input}) => {
        const value = input.value
        const pwd = zxcvbn(input.value)
        const {suggestions: suggestion} = pwd.feedback
        const {score} = pwd
        console.log(this.createColorWidth(score));
        console.log(score)
        this.setState({value, suggestion, })
    }

    createColorWidth = (score) => {
        const result = {}
        switch (score) {
            case 0:
                result.bgColor = "red"
                result.width="20%"
                result.strength = "Very Weak"
                break
            case 1:
                result.bgColor = "red"
                result.width="40%"
                result.strength = "Weak"
                break
            case 2:
                result.bgColor = "yellow"
                result.width = "60%"
                result.strength = "Medium"
                break
            case 3:
                result.bgColor = "green"
                result.width = "80%"
                result.strength = "Strong"
                break
            case 4:
                result.bgColor = "green"
                result.width = "100%"
                result.strength = "Very Strong"
                break
            default:
                break;
        }
        this.setState({bgColor: result.bgColor, width: result.width, strength: result.strength})
    }
    render() {
        const {bgColor, width, strength} = this.state
        console.log(strength);
        return (
            <React.Fragment>
                <Input type="text" value={this.state.value} onChange={this.handleChange}/> 
                <Bar width={width} height={'100%'} bgColor={bgColor} />
                <p>{strength}</p>
                <p >{this.state.suggestion}</p>
                
            </React.Fragment>
        )
    }


}

export default Password;