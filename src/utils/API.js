export const getAllReport = async () => {
  try {
    const response = await fetch(
        'http://plates-reviewer-backend-lb-157608247.us-east-1.elb.amazonaws.com/report'
    );
    const json = await response.json();
    return json;
  } catch (err) {}
};