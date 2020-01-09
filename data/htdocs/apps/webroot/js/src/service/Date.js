export const timeStamp = (myStrong) => {
    const strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
}

export const getTime = (data) => {
    const dt = new Date(data);
    const y = dt.getFullYear();
    const m = ("00" + (dt.getMonth() + 1)).slice(-2);
    const d = ("00" + dt.getDate()).slice(-2);
    const hh = (dt.getHours());
    const mm = (dt.getMinutes());
    // const ss = ("00" + dt.getSeconds());
    const result = y + '/' + m + '/' + d;
    return result;
}