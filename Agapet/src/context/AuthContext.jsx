import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  /*
    const register = (name,lastname,email, phone, direction, password) =>{
        const url ='http://192.168.200.4:8000/user/registeradoptante';
        setIsLoading(true)
        axios.post(url,{
            name,
            lastname,
            email,
            phone,
            direction,
            password,
            headers: {  'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'}
          }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            alert("Usuario Registrado con éxito");
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
          }).catch(e => {
            console.log(`register error ${e}`);
            setIsLoading(false);
          });
    };
*/

  const register = async (name,lastname,email, phone, direction, password) => {
    try {
      const url = "http://192.168.200.4:8000/user/registeradoptante";

      setIsLoading(true);
      await axios.post(url, {user:{name,lastname,email, phone, direction, password,age:0}});
      alert("Usuario Registrado con éxito");
      setIsLoading(false);
      
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const login = (email, password) => {
    const url = "http://192.168.200.4:8000/user/login";
    setIsLoading(true);
    axios
      .post(url, { email, password })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo)
        console.log("Mi token de acceso: ", userInfo.access);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem("userInfo");
    setUserInfo({});
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      //setSplashLoading(true);
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
      }
      //setSplashLoading(false);
    } catch (e) {
      //setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
