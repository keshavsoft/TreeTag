import { StartFunc as StartFuncFromFetchAsPost } from "./FetchAsPost/entryFile.js";

let StartFunc = () => {
    // Show success message in h2 immediately
    // const h2 = document.querySelector('h2');
    // if (h2) {
    //     const originalText = h2.textContent;
    //     h2.textContent = 'Saved successfully!';
    //     h2.classList.add('success-message');
    //     setTimeout(() => {
    //         h2.textContent = originalText;
    //         h2.classList.remove('success-message');
    //         // Clear the input field after showing the message
    //         const userNameInput = document.getElementById('UserNameId');
    //         if (userNameInput) userNameInput.value = '';
    //     }, 1000);


    // }

    // const localhtmlId = document.getElementById("UserNameId");
    // console.log("hi", localhtmlId, localhtmlId.value);





    if (!navigator.geolocation) {
        console.log("Geolocation not supported.");
        return;
    };

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

function updateMap(lat, lon) {
    if (!marker) {
        marker = L.marker([lat, lon]).addTo(map);
    } else {
        marker.setLatLng([lat, lon]);
    }
    map.setView([lat, lon], 15);
};

function addToHistory(lat, lon) {
    const li = document.createElement("li");
    li.textContent = `Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)} - ${new Date().toLocaleTimeString()}`;
    historyList.prepend(li);
}

const jFLocalSuccess = (pos) => {
    const { latitude, longitude, accuracy } = pos.coords;
    console.log("latitude : ", latitude);
    console.log("longitude : ", longitude);
    console.log("accuracy : ", accuracy);

    StartFuncFromFetchAsPost({
        inLatitude: latitude,
        inLongitude: longitude,
        inTreeName: accuracy
    }).then(PromiseData => {
        console.log("aaaaaaaaaaaaaa : ", PromiseData);
        updateMap(latitude, longitude);
        addToHistory(latitude, longitude);
    });
};

export { StartFunc };