import React, { useState } from 'react'
import Checkbox from 'react-custom-checkbox'
import * as Icon from "react-icons/fi";
import { AnimationOnScroll } from 'react-animation-on-scroll';
/* const countrySelect = [
    { value: 'vietnam', label: 'Vietnam' },
    { value: 'usa', label: 'Usa' },
    { value: 'germany', label: 'Germany' },
    { value: 'italy', label: 'Italy' },
]
const platformSelect = [
    { value: 'vietnam', label: 'Vietnam' },
    { value: 'usa', label: 'Usa' },
    { value: 'germany', label: 'Germany' },
    { value: 'italy', label: 'Italy' },
]
 */
export default function ContactForm() {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [country, setCountry] = useState('')
    const [platform, setPlatform] = useState('')
    const [older, setOlder] = useState(false)
    const [accept, setAccept] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        if (older && accept) {
            console.log(name, mail, country, platform, older, accept)
        } else {
            alert('Please check the condition checkbox')
        }
    }

    return (
        <>
            <section className="contact-form-wrapper">
                <AnimationOnScroll animateIn='animate__bounceInUp'>
                    <div className="contact-form__column">
                        <div className="contact-form__image">
                            <img src="https://img.enderws.com/gameloft/minion.png" alt="minion" />
                        </div>
                        <div className="contact-form__form">
                            <h2>Stay in the Know!</h2>
                            <p>Don't get left behind!<br />
                                Subscribe to our newsletters today!</p>
                            <form onSubmit={submitHandler}>
                                <input type="text" id="name" placeholder='Name' onChange={(e) => setName(e.target.value)} required></input>
                                <input type="email" id="email" placeholder='Email' onChange={(e) => setMail(e.target.value)} required></input>
                                <select id="country" name="Country" defaultValue="" onChange={(e) => setCountry(e.target.value)} required>
                                    <option value="" disabled hidden>Country</option>
                                    <option value="vietnam">Vietnam</option>
                                    <option value="usa">USA</option>
                                    <option value="germany">Germany</option>
                                    <option value="italy">Italy</option>
                                </select>
                                <select id="platform" name="Platform" defaultValue="" onChange={(e) => setPlatform(e.target.value)} required>
                                    <option value="" disabled hidden>Platform</option>
                                    <option value="android">Android</option>
                                    <option value="ios">IOS</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className='contact-form__form-checkbox'>
                                    <Checkbox
                                        icon={<Icon.FiCheck color="#2699fb" size={11} />}
                                        name="older"
                                        size={11}
                                        className="contact-form__form-checkbox-older"
                                        borderRadius={0}
                                        borderWidth={1}
                                        checked={false}
                                        onChange={(value) =>
                                            setOlder(value)
                                        }
                                        borderColor="#2699fb"
                                        style={{ cursor: "pointer" }}
                                        labelStyle={{ marginLeft: 10, marginTop: -5, userSelect: "none", fontSize: 11 }}
                                        label="By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy."
                                    />
                                    <Checkbox
                                        icon={<Icon.FiCheck color="#2699fb" size={11} />}
                                        name="accept"
                                        size={11}
                                        className="contact-form__form-checkbox-accept"
                                        borderRadius={0}
                                        borderWidth={1}
                                        checked={false}
                                        onChange={(value) =>
                                            setAccept(value)
                                        }
                                        borderColor="#2699fb"
                                        style={{ cursor: "pointer", top: 100 }}
                                        labelStyle={{ marginLeft: 10, marginTop: -5, userSelect: "none", fontSize: 11, width: 232 }}
                                        label="I agree to receive promotional offers relating to all Gameloft games and services."
                                    />
                                </div>
                                <div className="contact-form__form-submit">
                                    <button type="submit">Button</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>
        </>
    )
}
