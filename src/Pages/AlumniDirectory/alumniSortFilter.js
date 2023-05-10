export const filterBySort = (alumni, sort) => {
  // check if the original array is undefined, not an array or has length of 0
  if (!alumni || !Array.isArray(alumni) || alumni.length === 0) {
    return alumni;
  }

  // Make a copy of the alumni array as the original array cant be modified
  const sortedAlumni = [...alumni];

  // Sort the alumni array based on the selected sort option

  switch (sort) {
    case "Name A to Z":
      return sortedAlumni.sort((a, b) => a?.name.localeCompare(b?.name));
    case "Name Z to A":
      return sortedAlumni.sort((a, b) => b?.name.localeCompare(a?.name));
    case "Batch: Old to New":
      return sortedAlumni.sort((a, b) => a?.graduation_year - b?.graduation_year);
    case "Batch: New to Old":
      return sortedAlumni.sort((a, b) => b?.graduation_year - a?.graduation_year);
    default:
      // If no sort option is selected, return the original array
      return sortedAlumni;
  }
};
