import React, {Component} from 'react';
import './Contact.css'
class Contact extends Component {
    render(){
        return (
            <div class = "contact">
                <h1 class = "head">I appreciate all your time for seeing my FIRST EVER little react project!</h1>
                <h2 class = "head2">I believe there will be a better version in the future ;)</h2>
                <h2 class = "head2">Contact me if there is any potential opportunity, or just wanna discuss MORE about coding!</h2>
                <div class = "ways">
                    <div>
                        <span>
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <h4>Mail</h4>
                        <p class = "mail">fadillahmichael@hotmail.com</p>
                    </div>
                    <div>
                        <span>
                            <ion-icon name="call"></ion-icon>
                        </span>
                        <h4> Phone </h4>
                        <p class = "phone"> +1 (631) 559-2098</p>
                    </div>
                    <div>
                        <span>
                            <ion-icon name="phone-portrait"></ion-icon>
                        </span>
                        <h4 class = "wechath"> Skype</h4>
                        <p class = "wechat"> fadillahmic</p>
                    </div>
            </div>
            </div>
        )
    }
};

export default Contact;
