import moment from "moment";

export const fileFormat = (url) => {
    const fe = url.split(".").pop();
    if (fe === "mp4" || fe === "webm" || fe == "ogg") return "video";
    if (fe === "mp3" || fe === "wav") return "audio";
    if (fe === "png" || fe === "jpg" || fe == "jpeg" || fe === "gif")
        return "image";

    return "file";
};

export const transformImage = (url="",width=100) => url

export const getLast7days=()=>{
    const currentDate=moment();
    
    const last7Days=[];

    for(let i=0;i<7;i++){
        const dayDate=currentDate.clone().subtract(i,"days");
        const dayName=dayDate.format("dddd");

        last7Days.unshift(dayName);
    }
    return last7Days;

}