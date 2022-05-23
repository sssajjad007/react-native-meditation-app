
import TrackPlayer, { Event } from 'react-native-track-player';
export async function service(){
    TrackPlayer.addEventListener( Event.RemotePlay,function remotePlay() {
        TrackPlayer.play();
    });
    TrackPlayer.addEventListener( Event.RemotePause,function remotePlay() {
        TrackPlayer.pause();
    });
    // TrackPlayer.addEventListener( Event.RemoteStop,function remotePlay() {
    //     TrackPlayer.destroy();
    // })
    
}
