let StartFunc = () => {
    if (!navigator.geolocation) {
        console.log("Geolocation not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        jFLocalSuccess,
        (err) => {
            console.log("err : ", err.message);
        },
        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }
    );
};

const jFLocalSuccess = (pos) => {
    const { latitude, longitude, accuracy } = pos.coords;
    console.log("latitude : ", latitude);
    console.log("longitude : ", longitude);
    console.log("accuracy : ", accuracy);
};

export { StartFunc };