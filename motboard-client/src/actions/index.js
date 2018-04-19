
export const loginData = (flag, user) => {
    console.log("action", flag);
    console.log("action", user);
    return {
        type: "LOGIN_DATA",
        flag,
        user
    }
}