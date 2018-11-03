Match paring elements: 

function pairElement(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    newArr.push([str.charAt(i)]);
  };
  
  for (let i = 0; i < newArr.length; i++) {
    switch(newArr[i][0]) {
      case 'A':
        newArr[i].push('T');
        break;
      case 'T':
        newArr[i].push('A');
        break;
      case 'G':
        newArr[i].push('C');
        break;
      case 'C':
        newArr[i].push('G');
        break;
      default:
        console.log('Invalid Marker');
    }
  }
  
  console.log(newArr);

  //newArr[0].push('A');
}

pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA");