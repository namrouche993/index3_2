from moviepy.editor import *

def add_text_with_opacity(video_path, output_path, text001, text002):
    # Load the video
    video = VideoFileClip(video_path)

    # Reduce the video length to 25 seconds
    video = video.subclip(0, 25)
    text001 = "GPS :\nMister Pizza N1"
    # Define the texts to be added with opacity
    txt001 = TextClip(text001, fontsize=50, color='white', bg_color='black', size=(video.w, None), method='caption', align='center', interline=-10).set_duration(video.duration)

    txt001 = txt001.set_opacity(0.6)

    # Combine text2 and text3 with a line break
    text002 = "Zeralda Alger\n0556 61 05 73"

    txt002 = TextClip(text002, fontsize=50, color='white', bg_color='black', size=(video.w, None), method='caption', align='center', interline=-10).set_duration(video.duration)
    txt002 = txt002.set_opacity(0.6).set_position(('center', 'bottom'))

    # Combine text001 and text4 with a line break
    # Combine the video with the text clips
    video_with_text = CompositeVideoClip([video, txt001, txt002])

    # Write the result to a new file
    video_with_text.write_videofile(output_path, codec='libx264', audio_codec='aac')

if __name__ == "__main__":
    # Provide the path to your input video, output video, and texts
    input_video_path = "video.mp4"
    output_video_path = "video_with_text.mp4"
    text001 = "GPS :\nMister Pizza N1"
    text002 = "Zeralda Alger\n0556 61 05 73"

    # Add the text with opacity to the video
    add_text_with_opacity(input_video_path, output_video_path, text001, text002)
