export
  function generateRandomString (length:number): string {
    const characters = 'QWERTYUIOPasdfghjkl1234567890';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}