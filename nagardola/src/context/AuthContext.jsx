const { useContext } = require("react");
const { authContext } = require("./AuthProvider");

export const useAuthContext = useContext(authContext)