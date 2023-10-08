function formatDate(inputDate) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
}

export default formatDate;
