export const getAllReport = async () => {
  try {
    const response = await fetch(
      'http://lb-plates-reviewer-1807177165.eu-north-1.elb.amazonaws.com/report',
    );
    const json = await response.json();
    return json;
  } catch (err) {}
};
