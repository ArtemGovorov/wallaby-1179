export default (response) => {
  const relevantData = response[0].schoolClass.name.split("-");
  const grade = parseInt(relevantData[0]);
  const section = relevantData[1];
  return { grade, section }
}