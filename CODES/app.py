from flask import Flask, render_template, request
import speech_recognition as sr

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/speech-to-text', methods=['POST'])
def speech_to_text():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        audio_data = r.record(source, duration=5)  # Adjust duration as needed
    try:
        text = r.recognize_google(audio_data)
        return text
    except sr.UnknownValueError:
        return "Sorry, could not understand the audio."
    except sr.RequestError as e:
        return f"Error: {e}"

if __name__ == '__main__':
    app.run(debug=True)
