import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (event) => {
    setCurrentMode(event.target.value);
    localStorage.setItem("themeMode", event.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    let value;
    switch (clicked) {
      case "chat":
        value = isClicked.chat;
        break;
      case "cart":
        value = isClicked.cart;
        break;
      case "userProfile":
        value = isClicked.userProfile;
        break;
      case "notification":
        value = isClicked.notification;
        break;
      default:
        value = false;
    }
    setIsClicked({ ...initialState, [clicked]: !value });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
