import React, { ChangeEvent, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { sendContact, useIsMobile } from '../../lib/helpers';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mobile = useIsMobile();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactError, setContactError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setContactError({
      ...contactError,
      message: false,
    });
    setContactForm({
      ...contactForm,
      message: evt.currentTarget.value,
    });
  };
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setContactError({
      ...contactError,
      [`${evt.currentTarget.name}`]: false,
    });
    setContactForm({
      ...contactForm,
      [`${evt.currentTarget.name}`]: evt.currentTarget.value,
    });
  };
  const submitForm = () => {
    let nameError = false,
      emailError = false,
      messageError = false;
    if (
      contactForm.email !== '' &&
      contactForm.name !== '' &&
      contactForm.message !== ''
    ) {
      sendContact({ ...contactForm }).then((resp) => {
        console.log(resp.data);
        if (resp.errorCode === 200 && resp.data.id) {
          setSubmitted(true);
        }
      });
    } else {
      if (contactForm.name === '') {
        nameError = true;
      }
      if (contactForm.email === '') {
        emailError = true;
      }
      if (contactForm.message === '') {
        messageError = true;
      }
      setContactError({
        ...contactError,
        name: nameError,
        email: emailError,
        message: messageError,
      });
    }
  };
  return (
    <div id="contact" className={'section'}>
      <div className="section-inner w-full" ref={ref}>
        <div>
          <div
            className={
              isInView && !mobile
                ? 'animate__animated animate__fadeInRight animate__delay-1s'
                : ''
            }
          >
            <h2>Contact Me</h2>
            {!submitted && (
              <div
                className={
                  isInView && !mobile
                    ? 'contact-form animate__animated animate__fadeInRight animate__delay-1s'
                    : 'contact-form'
                }
              >
                <div className={'form-row'}>
                  <div className={'form-field'}>
                    <input
                      type={'text'}
                      name={'name'}
                      value={contactForm.name}
                      onChange={handleInputChange}
                      placeholder={'Your Name'}
                      className={contactError.name ? 'error' : ''}
                      onFocus={() => {
                        setContactError({
                          ...contactError,
                          name: false,
                        });
                      }}
                    />
                  </div>
                  <div className={'form-field'}>
                    <input
                      type={'email'}
                      name={'email'}
                      value={contactForm.email}
                      onChange={handleInputChange}
                      placeholder={'Your Email Address'}
                      className={contactError.email ? 'error' : ''}
                      onFocus={() => {
                        setContactError({
                          ...contactError,
                          email: false,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className={'form-row'}>
                  <div className={'form-field'}>
                    <textarea
                      name={'message'}
                      onChange={handleTextareaChange}
                      rows={10}
                      placeholder={'Your Message'}
                      className={contactError.message ? 'error' : ''}
                      onFocus={() => {
                        setContactError({
                          ...contactError,
                          message: false,
                        });
                      }}
                      value={contactForm.message}
                    />
                  </div>
                </div>
                <div className={'form-actions'}>
                  <button type={'submit'} onClick={submitForm}>
                    Submit
                  </button>
                </div>
              </div>
            )}
            {submitted && (
              <div
                className={
                  'contact-submitted animate__animated animate__fadeInLeft'
                }
              >
                <h3>
                  Thanks for contacting me. I will respond as soon as possible.
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
