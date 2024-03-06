function startListening() {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
        document.getElementById('start-btn').style.display = 'none';
        document.getElementById('stop-btn').style.display = 'inline-block';
    };

    recognition.onresult = function(event) {
        var result = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            result += event.results[i][0].transcript;
        }
        document.getElementById('result').innerHTML = result;
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = function() {
        document.getElementById('start-btn').style.display = 'inline-block';
        document.getElementById('stop-btn').style.display = 'none';
    };

    recognition.start();
}

function stopListening() {
    var recognition = new webkitSpeechRecognition();
    recognition.stop();
}
