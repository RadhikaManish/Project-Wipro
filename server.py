from flask import Flask, render_template, request
import google.generativeai as palm
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
palm_api_key = os.environ["PALM_API_KEY"]
palm.configure(api_key=palm_api_key)

# Set up Flask app
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chatbot", methods=['POST'])
def chatbot():
    user_input = request.form["message"]
    print(f"User input: {user_input}")  # Debugging statement
    
    models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
    if not models:
        return "No models available for text generation"
    
    model = models[0].name
    print(f"Selected model: {model}")  # Debugging statement
    
    prompt = f"User: {user_input}\nPaLM Bot: "
    print(f"Prompt: {prompt}")  # Debugging statement
    
    # Generate the response
    response = palm.generate_text(
        model=model,
        temperature=0,
        stop_sequence=None,
        prompt=prompt,
        max_output_tokens=100
    )
    print(f"Response: {response}")  # Debugging statement
    
    bot_response = response.result
    print(f"Bot response: {bot_response}")  # Debugging statement
    
    chat_history = [f"User: {user_input}\nPaLM Bot: {bot_response}"]
    
    return render_template(
        "chatbot.html",
        user_input=user_input,
        bot_response=bot_response,
        chat_history=chat_history
    )

if __name__ == "__main__":
    app.run(debug=True)
