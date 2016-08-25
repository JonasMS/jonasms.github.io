export const loadJSON = (jsonFilePath, cb) => {
  const xReq = new XMLHttpRequest();
  xReq.overrideMimeType("application/json");
  xReq.open('GET', jsonFilePath, true);
  xReq.onreadystatechange = () => {
    if (xReq.readyState === 4 && xReq.status === "200") {
      cb(xReq.responseText);
    }
  }
  xReq.send(null);
};
