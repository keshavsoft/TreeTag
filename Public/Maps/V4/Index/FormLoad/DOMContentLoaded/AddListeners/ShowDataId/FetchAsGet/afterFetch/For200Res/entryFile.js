let StartFunc = ({ inResponseAsJson }) => {
    console.log("aaaaaaa : ", inResponseAsJson);

    inResponseAsJson.forEach(element => {
        marker = L.marker([element.Latitude, element.Longitude], { icon: greenIcon }).addTo(map).bindPopup(element.pk.toString());
    });
};

export { StartFunc };