import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import me from './photos/me.jpg';
import Typing from 'react-typing-animation';
import { Spring } from 'react-spring/renderprops';

const particleOpt = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 300
      }
    }
  }
}

const myPicture = {
  position:'absolute',
  top:'50%',
  left:'50%',
  transform: 'translate(-50%, -50%)',
  width: '150px',
  borderRadius: '50%',
}

const name = {
  position: 'absolute',
  top: '62%',
  left: '50%',
  fontSize:40,
  color: 'white',
  fontWeight: 'bold',
  transform: 'translate(-50%, -50%)',
  zIndex: 1
}

const myDescription = {
  position: 'absolute',
  top: '75%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  color: 'white',
  zIndex: 1
}

const bgImage = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundImage: 'linear-gradient(to right, #2193b0, #6dd5ed)',
  zIndex: -1
}

const Github = {
    float:'right',
    fontSize:'15px',
    marginRight:10,
    fontFamily: 'Helvetica',
    color: 'white',
}

const Home = {
    float:'right',
    fontSize:'15px',
    marginRight:10,
    fontFamily: 'Helvetica',
    color: 'white',
}

const NextSection = ( {onMouseOver} ) => (
  <div>
    <a href="https://github.com/winson-ye">
      <h1 style={Github} className={"button"}>
        GITHUB
      </h1>
    </a>
    <a href="https://winson-ye.github.io/">
      <h1 style={Home} className={"button"}>
        HOME
      </h1>
    </a>
    <a href="public/papers/HoTWoT_Chatbot_Survey.pdf">
      <h1 style={Github} className={"button"}>
        CHATBOT SURVEY
      </h1>
    </a>
    <a href="public/papers/EdgeSP_Chatbot_Security.pdf">
      <h1 style={Github} className={"button"}>
        CHATBOT SECURITY
      </h1>
    </a>
  </div>
);

const AnimatedTypingComponent = ({style, beginTyping}) => (
      !beginTyping 
      ? 
      ' '
      :
      <div style={style}>
        <Typing loop = {true} cursorClassName = {'cursor'}>
          Programmer.
          <Typing.Delay ms={1000}/>
          <Typing.Backspace count={12}/>
          Researcher.
          <Typing.Delay ms={1000}/>
          <Typing.Backspace count={12}/>
          Teacher.
          <Typing.Delay ms={1000}/>
          <Typing.Backspace count={9}/>
        </Typing>
      </div>
);

const Profile = ({beginTyping}) => (
  <div>
    <p style = {name}> I'm Winson. </p>
    <img src={me} style={myPicture}/>
    <AnimatedTypingComponent style={myDescription} beginTyping={beginTyping}/>
  </div>
)


class Land extends Component {
    constructor(props) {
        super(props);
        this.state = { beginTyping: false };
    }

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {

        return (
            <div>
                <Spring
                  from={{opacity:0}}
                  to={{opacity:1}}
                  config={{duration: 1000}}
                  onRest={() =>
                    this.setState({beginTyping: true})
                  }>
                  {props => (
                    <div style={props}>
                      <Profile beginTyping={this.state.beginTyping} />
                    </div>
                  )}
                </Spring>
                <Particles params={particleOpt} style={bgImage}/>
                <NextSection />
            </div>
        );
    }
}

export default Land;