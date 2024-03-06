# Speech-To-Text

Speech-To-Text is a web application built using Flask and JavaScript that allows users to convert spoken words into text.

## Description

This project utilizes the Web Speech API for capturing audio input from the user's microphone and then uses the Google Speech Recognition API to transcribe the speech into text. The application provides a simple user interface with a "Start Listening" button to initiate speech recognition and a "Stop" button to end the process.

## AIM :
The aim of this project is to create a web application that converts speech to text in real-time using the Web Speech API and Google Speech Recognition API.

## Features :

- Speech-to-text conversion in real-time.
- Start and stop listening functionalities.
- Responsive and user-friendly interface.

## Installation :

To run the application locally, follow these steps:

#### Clone the repository:

```bash
   git clone https://github.com/KSPandian7/Speech-To-Text.git
```

## Navigate to the project directory:

```bash
cd Speech-To-Text
```

## Install the required dependencies:
```bash
pip install Flask
```

```bash
pip install Flask SpeechRecognition
```

```bash
pip install virtualenv
```

```bash
virtualenv venv
```

```bash
pip install pyaudio
```

## Usage
• Click on the "Start Listening" button to begin capturing audio from your microphone.

• Speak clearly into the microphone.

• Click on the "Stop" button to end the speech recognition process and view the transcribed text.

## Technologies Used
- Python
- Flask
- JavaScript
- HTML
- CSS

## ALGORITHM :

1. Start the Flask application.
2. Load the index.html template when the user accesses the root URL.
3. When the user clicks the "Start Listening" button, initiate the speech recognition process.
4. Capture audio input from the microphone using the Web Speech API.
5. Send the audio data to the server using a POST request.
6. Use the Google Speech Recognition API to transcribe the speech into text.
7. Display the transcribed text on the webpage.
8. Provide a "Stop" button to end the speech recognition process.

## Run the Flask application:
```bash
python app.py
```
### Result :
Access the application in your web browser at http://localhost:5000.


#### Developed by -  KULASEKARAPANDIAN K

