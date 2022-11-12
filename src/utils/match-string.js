
/**
 * Match all image URLs from string
 *
 * @param {string} str Input text
 * @return {array} All matching images
 */
function matchAllImageUrls(str) {

    if (typeof str !== 'string') return [];

    let strGetAllUrls = str.match(/http[s]?:\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ig);
    // delete a query string parameter
    strGetAllUrls = strGetAllUrls.map(item => item.split('?')[0]);
    const strImagsAll = strGetAllUrls.filter(item => /\.(jpg|jpeg|png|svg|gif|webp)$/i.test(item));
    return strImagsAll;
}


// node & browser
module.exports = {
    matchAllImageUrls
}