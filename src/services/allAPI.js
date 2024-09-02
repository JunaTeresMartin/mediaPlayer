import commonAPI from './commonAPI'
import serverUrl from './baseURL'

//upload video
export const uploadVideoAPI=async(uploadVideo)=>{
    return await commonAPI("POST",`${serverUrl}/allVideos`,uploadVideo)//first commonAPI fn should be successfully completed, then only return  the response, so we need await
}