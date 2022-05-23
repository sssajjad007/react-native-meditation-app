import React from "react";

export const AuthContext = React.createContext<{value: boolean, setValue: (value: boolean) => void}>({value: false, setValue: () => {}});