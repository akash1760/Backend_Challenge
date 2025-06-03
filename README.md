# Backend_Challenge
Here is a structured implementation of the backend challenge using Node.js (Express.js) for the Prime Number Check API
<hr/>
  <h1>Prime Number Checker API</h1>

  <p>A simple and clean Node.js + Express API that checks whether a given number is a <strong>prime number</strong> or not.</p>
  
  <h2>What It Does</h2>
  <ul>
    <li>Accepts a <strong>GET</strong> request at <code>/is-prime</code> with a number as a query parameter.</li>
    <li>Returns a JSON response indicating whether the number is <strong>prime or not</strong>.</li>
    <li>Handles invalid inputs and provides meaningful error messages.</li>
  </ul>

  <h2>Project Structure</h2>
  <pre><code>Backend_Challenge/
├── index.js              # Main server file
├── package.json          # Node.js dependencies
└── README.md             # Instructions and documentation
</code></pre>

  <h2>Setup Instructions</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a> (v14 or above)</li>
    <li>npm (Node package manager)</li>
  </ul>

  <h3>1. Clone the Repository</h3>
  <pre><code>git clone https://github.com/akash1760/Backend_Challenge.git
cd Backend_Challenge</code></pre>

  <h3>2. Install Dependencies</h3>
  <pre><code>npm install</code></pre>

  <h3>3. Start the Server</h3>
  <pre><code>npm start</code></pre>
  <p>The server will start at: <strong>http://localhost:3000</strong></p>

  <h2>How to Use</h2>
  <h3>Endpoint</h3>
  <p><strong>GET</strong> <code>/is-prime?number=&lt;your_number&gt;</code></p>

  <h3>Example Request</h3>
  <pre><code>GET http://localhost:3000/is-prime?number=17</code></pre>

  <h3>Example Response</h3>
  <pre><code>{
  "number": 17,
  "is_prime": true
}</code></pre>

  <h3>Error Example</h3>
  <pre><code>GET http://localhost:3000/is-prime?number=abc</code></pre>

  <p><strong>Response:</strong></p>
  <pre><code>{
  "error": "\"number\" must be a valid integer."
}</code></pre>

  <h2>Features</h2>
  <ul>
    <li>Clean and readable code</li>
    <li>Proper error handling</li>
    <li>Efficient prime number logic</li>
    <li>Easily testablel</li>
  </ul>

 

  <h2>Author</h2>
  <p><strong>Akash Unhale</strong><br>
  <a href="https://www.linkedin.com/in/akash-unhale-384092189/">LinkedIn</a> • 
  <a href="https://github.com/akash1760">GitHub</a></p>


<h2><strong>Thank you..!</strong></h2>
