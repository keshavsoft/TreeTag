function getLocation() {
    tryAgainBtn.style.display = "none";

    if (!navigator.geolocation) {
        loc.textContent = "Geolocation not supported.";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const { latitude, longitude, accuracy } = pos.coords;
            return latitude;

        },
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

export { getLocation }
