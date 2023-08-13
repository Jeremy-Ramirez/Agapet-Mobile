import React from 'react';
console.reportErrorsAsExceptions = false; // copy paste this line in your App.js 
//Ventanas
import {Navigation} from './src/components/Navigation'
import {AuthProvider} from './src/context/AuthContext'


export default function App() {
  
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

