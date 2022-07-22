export const htmlToString = (content) => {
    return content.replace(/<[^>]+>/g, '');
}