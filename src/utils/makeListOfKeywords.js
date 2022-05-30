export default function makeListOfKeywords(articles) {
  const allKeyWords = [];
  const newArray = [];
  
  articles.forEach((element) => {
    allKeyWords.push(element.keyword);
  })

  allKeyWords.sort();

  for (let i=0; i<=allKeyWords.length; i++) {
    const upTo = allKeyWords.lastIndexOf(allKeyWords[i]);
    // newArray[i] = allKeyWords.slice(0, upTo+1);
    allKeyWords.splice(i, upTo+1); 
  }

  // for (let i=0; i<newArray.length; i++) {
  //   let temp = 0;
  //   const x = [].concat(newArray[i]);
  //   const y = [].concat(newArray[i+1]);
  //   if (y.length > x.length) {
  //     temp = newArray[i];
  //     newArray[i] = newArray[i+1];
  //     newArray[i+1] = temp;
  //   }
  // }

  // for (let i=0; i<newArray.length; i++) {
  //   allKeyWords[i] = newArray[i][0];
  // }

  console.log(allKeyWords)
  console.log(newArray)

  return allKeyWords.join(', ');
}