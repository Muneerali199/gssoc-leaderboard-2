import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function MagicalAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([0.3]);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Harry Potter theme music (using a reliable audio source)
  const audioSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      audio.volume = volume[0];
      audio.loop = true;
    };

    audio.addEventListener('canplay', handleCanPlay);
    
    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [volume]);

  const togglePlay = async () => {
    try {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          // Modern browsers require user interaction before playing audio
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.error("Audio playback error:", error);
      // Fallback for browsers that block autoplay
      alert("Please click the play button to start the music. Some browsers require user interaction.");
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume[0];
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 space-y-3 min-w-64 shadow-lg magical-glow">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          🎼 Gssoc 25
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="outline"
            onClick={togglePlay}
            className="shrink-0"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={toggleMute}
            className="shrink-0"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          
          <div className="flex-1">
            <Slider
              value={volume}
              onValueChange={handleVolumeChange}
              max={1}
              min={0}
              step={0.1}
              className="w-full"
            />
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground">
          {isPlaying ? "🎵 Playing Hedwig's Theme" : "🎵 Press play for magical music"}
        </p>
      </div>
      
      {/* Preload the audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => console.error("Audio error:", e)}
      >
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}