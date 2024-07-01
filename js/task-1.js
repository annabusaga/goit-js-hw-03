function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascaaaaaaaaaaaaaaaaaaasaaasdffghjkl;;;lkjhgfdsasdfghjklkjhgfdsdfghjklkjhgfdsdfghjklkjhgfdsasdfghjkjhgvfcdxszsdfghjklkjhgfdsasdfghjkl;lkjhgfdsertyuioiuytrewyuioijhgfdsdfghjklkjhresdfghjiklkjhgvcfghjklkjhgfghjklkjnbgvfghjkjhgfdfghjkl;';09liuytyvhj9iy7 r5v  nkgtmytynjkgl;lthjgkjmbkvmvhbtykfmjhritgnikgk
