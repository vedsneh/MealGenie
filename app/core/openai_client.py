import openai
import os

openai.api_key = openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_gpt_response(prompt: str):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # or "gpt-4" if you have access
            messages=[
                {"role": "system", "content": "You are a helpful cooking assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"❌ Error from OpenAI: {str(e)}"







