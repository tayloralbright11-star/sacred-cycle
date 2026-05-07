exports.handler = async function(event) {
if (event.httpMethod !== “POST”) return { statusCode: 405, body: “Method Not Allowed” };

const { prompt, maxTokens } = JSON.parse(event.body || “{}”);

const res = await fetch(“https://api.anthropic.com/v1/messages”, {
method: “POST”,
headers: {
“Content-Type”: “application/json”,
“x-api-key”: process.env.ANTHROPIC_API_KEY,
“anthropic-version”: “2023-06-01”
},
body: JSON.stringify({
model: “claude-sonnet-4-20250514”,
max_tokens: maxTokens || 600,
messages: [{ role: “user”, content: prompt }]
})
});

const data = await res.json();
const text = data.content?.map(b => b.text || “”).join(””) || “”;
return {
statusCode: 200,
headers: { “Content-Type”: “application/json”, “Access-Control-Allow-Origin”: “*” },
body: JSON.stringify({ text })
};
};
