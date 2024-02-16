import React, { useState, useRef } from 'react';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import firebase from './firebase'; // Import your Firebase configuration file

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [error, setError] = useState(null);
  const recaptchaContainerRef = useRef(null);

  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(firebase);
      const appVerifier = new RecaptchaVerifier(recaptchaContainerRef.current, {
        size: 'invisible',
      });
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError(error.message);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
      await firebase.auth().signInWithCredential(credential);
      // User successfully authenticated
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handlePhoneNumberSubmit}>
        <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <button type="submit">Send OTP</button>
      </form>

      <form onSubmit={handleVerifyCode}>
        <input type="text" placeholder="Verification Code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
        <button type="submit">Verify OTP</button>
      </form>

      {error && <p>{error}</p>}
      <div ref={recaptchaContainerRef}></div>
    </div>
  );
}

export default App;
