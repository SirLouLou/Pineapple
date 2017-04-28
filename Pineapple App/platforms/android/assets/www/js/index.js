document.addEventListener('deviceready', onDeviceready, false);

function OnDeviceready(){
    window.addEventListener("batterystatus", onBatteryStatus, false);

}

function onBatteryStatus(status) {
    alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
}

