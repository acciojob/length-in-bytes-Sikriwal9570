function byteSize(str) {
    // Create a Blob object with the string
    var blob = new Blob([str]);

    // Get the size property of the Blob object (size in bytes)
    return blob.size;
}