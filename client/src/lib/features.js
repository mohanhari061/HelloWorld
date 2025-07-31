export const fileFormat = (url) => {
    const fe = url.split(".").pop();
    if (fe === "mp4" || fe === "webm" || fe == "ogg") return "video";
    if (fe === "mp3" || fe === "wav") return "audio";
    if (fe === "png" || fe === "jpg" || fe == "jpeg" || fe === "gif")
        return "image";

    return "file";
};

export const transformImage = (url="",width=100) => url