export default isContentSafe;

const badWordsList = ["FUCK", "FCK", "SHIT", "KYS"];

/**
 *
 * @param {string} content
 * @returns
 */
function isContentSafe(content) {
  console.log(content);
  let isSafe = true;

  const optimizedContent = content.toUpperCase();
  const contentSplitted = optimizedContent.split(" ");

  contentSplitted.forEach((word) => {
    if (badWordsList.includes(word)) {
      isSafe = false;
    }
  });

  return isSafe;
}
