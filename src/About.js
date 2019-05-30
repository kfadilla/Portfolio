import React, { Component } from 'react';
import pic from './grad.jpg'
import './About.css'


class About extends Component {
    render() {
        return (
            <div class = "about">
            <section className = "head">
            <div>
                <h1 class="abouthead">About me</h1>
                <img src={pic} className="pic" align = "right"/>
                </div>
                </section>
                <section className = "des">
                <div className="p">
                <p class = "description">My name is Kwong Yuet Michael Fadillah Wong. (Michael Fadillah) I am looking for full-time new grad SDE opportunity.</p>
                <p class = "description">I am an undergrad at Indiana University, majoring in Computer Science, and specialize in Artificial intelligence, also minor in Business.</p>
                <p class = "description">With that being said, this is my first front-end react project ever!</p>
                <p class = "description">At first, I was majoring in business, but I wanted to learn more technical skill then I decided to major in Computer science.</p>
                <p class = "description">Building code and passing test cases give me a sense accomplishment and satisfying.</p>
                <p class = "description">I also like to learn new things, some of my friends who are majoring in business need to take some course that is relating writing regex in Python</p>
                <p class = "description">Which I did not learn from my course. </p>
                <p class = "description">But I wanted to help them, so I asked them to send my course material, and start learning online. </p>
                <p class = "description">Then try to complete their assignment in my own copy, and anaylze their homwork in depth, because I want them to learn. </p>
                <p class = "description">Therefore, I would schedule a time with them, and try my best to lead them step by step, and think through process. </p>
                <p class = "description">Click <a href = "https://drive.google.com/file/d/1XoaZ1CkLlsj7V7n6J-asgVrsRMVaqiRP/view?usp=sharing">here</a> to see my resume!</p>
                <p class = "description">Use the link below if it does not work</p>
                <p class = "description"> https://drive.google.com/file/d/1XoaZ1CkLlsj7V7n6J-asgVrsRMVaqiRP/view?usp=sharing </p>
                </div>
            </section>
            </div>
        );
    }
}

export default About;
