export const getAllReport = async () => {
  try {
    const response = await fetch(
      "http://lb-plates-reviewer-1807177165.eu-north-1.elb.amazonaws.com/report"
    );
    const json = await response.json();
    return json;
  } catch (err) {}
};

export const uploadCarImage = async (img) => {
  s3 = new FormData();
  s3.append("image", img);

  try {
    const response = await fetch(
      "http://lb-plates-reviewer-1807177165.eu-north-1.elb.amazonaws.com/upload-car-image",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: s3,
      }
    );
    const json = await response.json();
    return json;
  } catch (err) {}
};

export const createReport = async (lat, long, mediaURL, platesNumber) => {
  dataReport = {
    lat: parseInt(lat, 10),
    long: parseInt(long, 10),
    mediaURL: mediaURL,
    platesNumber: platesNumber,
  };

  console.log(dataReport);
  try {
    const response = await fetch(
      "http://lb-plates-reviewer-1807177165.eu-north-1.elb.amazonaws.com/report",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataReport),
      }
    );
    const json = await response.json();
    return json;
  } catch (err) {}
};
