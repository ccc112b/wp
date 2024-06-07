GROQ_API_KEY=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

curl -X POST "https://api.groq.com/openai/v1/chat/completions" \
     -H "Authorization: Bearer $GROQ_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"messages": [{"role": "user", "content": "GPT 是什麼？請用中文回答"}], "model": "llama3-8b-8192"}'