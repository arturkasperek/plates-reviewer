export const getAllReport = async (search) => {
  const response = await fetch(
    `http://lb-plates-reviewer-1807177165.eu-north-1.elb.amazonaws.com/report${search ? `?search=${search}` : ''}`
  );
  const json = await response.json();

  return json;
};

export const uploadCarImage = async (img) => {
  const s3 = new FormData();
  s3.append("image", img);

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
};

export const createReport = async (
  lat,
  long,
  mediaURL,
  platesNumber,
  comment
) => {
  const dataReport = {
    lat: parseFloat(lat, 10),
    long: parseFloat(long, 10),
    mediaURL: mediaURL,
    platesNumber: platesNumber,
    comment: comment,
  };

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
};
