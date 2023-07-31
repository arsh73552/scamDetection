const input = `
<div class="col-md-4 queryResponseBodyKey">Registered On</div>
<div class="col-md-8 queryResponseBodyValue">1997-09-15</div>
`;

const regex = /<div class="col-md-4 queryResponseBodyKey">Registered On<\/div>\s*<div class="col-md-8 queryResponseBodyValue">(\d{4}-\d{2}-\d{2})<\/div>/;
const match = input.match(regex);

if (match && match[1]) {
  const extractedDate = match[1];
  console.log(extractedDate); // Output: 1997-09-15
}
