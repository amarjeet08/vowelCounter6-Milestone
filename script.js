function countVowels(name){
  const vowels = ['a','e','i','o','u'];
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i].toLowerCase())) {
      count++
    }
  }
  return count;
}
const name = 'Amarjeet';
const vowelCount = countVowels(name);
console.log(`There are ${vowelCount} vowels in ${name}`)
