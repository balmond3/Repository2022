function replaceString(data) {
    let replacedStr = data;
    return replacedStr.replace(/stun/gi, "stump");

}
text = "A skunk sat on a stun and thunk the stun stumpk, but the stun thunk the skunk stumpk"
console.log(replaceString(text))