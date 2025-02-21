# URL Characters
Below is a table summarizing common URL restrictions based on the RFC 3986 standard. This table breaks down which characters are allowed in URLs and under what conditions they must be encoded:

| **Category**              | **Allowed Characters**                             | **Notes**                                                                                                                                          |
|---------------------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Unreserved**            | A–Z, a–z, 0–9, `-`, `.`, `_`, `~`                  | These characters can be used freely in a URL without any encoding.                                                                                 |
| **Reserved (Gen-delimiters)** | `:`, `/`, `?`, `#`, `[`, `]`, `@`               | These characters are used as delimiters to separate URL components (e.g., scheme, host, path, query, fragment). They must be percent-encoded when used in other contexts. |
| **Reserved (Sub-delimiters)** | `!`, `$`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `;`, `=` | These have special semantic meanings in URLs. Use them as intended or percent-encode if their literal value is required in data.                      |
| **Other (Disallowed) or Special** | Space, `<`, `>`, `"`, `{`, `}`, `|`, `\`, `^`, `` ` `` | These characters are not allowed in URLs and must be percent-encoded (or avoided) to ensure a valid URL format.                                    |

**Additional Notes:**

- **Percent-Encoding:** Any character that isn’t in the unreserved set or that is used in a context where its reserved purpose isn’t intended must be percent-encoded (e.g., a space becomes `%20`).
- **Non-ASCII Characters:** URLs are defined to use only ASCII characters. Any non-ASCII characters must be encoded using UTF-8 followed by percent-encoding.

This table provides a quick reference for the character restrictions within URLs, ensuring that URLs remain valid and correctly interpreted by browsers and servers.


# DNS
The Domain Name System (DNS) is like the phonebook of the internet—it translates human-friendly domain names (like **www.example.com**) into machine-friendly IP addresses (like **93.184.216.34**). Here’s a detailed look at how the entire DNS process works, along with examples of how a URL is translated into an address:

---

### 1. DNS Overview

- **Purpose:**  
  DNS allows users to type a domain name into their browser instead of remembering a numerical IP address. It then resolves this domain name into the IP address needed to locate the web server.

- **Key Components:**  
  - **Domain Name:** The readable name (e.g., *example.com*).  
  - **IP Address:** The numerical address (e.g., *93.184.216.34*).  
  - **DNS Servers:** Various servers that help in translating the domain name to an IP address, including root servers, top-level domain (TLD) servers, and authoritative servers.

---

### 2. Step-by-Step DNS Resolution Process

Imagine you type `http://www.example.com` into your browser. Here’s what happens behind the scenes:

1. **Browser Cache Check:**  
   - **Action:** Your browser first checks its own cache to see if it has recently resolved the domain.
   - **Example:** If you visited *www.example.com* earlier, the browser might already have the IP address stored.

2. **Operating System Cache:**  
   - **Action:** If the browser cache doesn’t have the information, the operating system’s cache is checked.

3. **Query the Recursive Resolver:**  
   - **Action:** If the address is still not found, your computer sends a DNS query to a recursive DNS resolver (usually provided by your ISP or a public DNS service like Google’s 8.8.8.8).
   - **Role:** The resolver acts as an intermediary that makes further requests on your behalf.

4. **Contacting the Root Name Servers:**  
   - **Action:** The recursive resolver starts by asking a root server for the IP address of the TLD server for “.com”.
   - **Result:** The root server doesn’t know the exact IP for *www.example.com* but directs the resolver to the appropriate TLD servers.

5. **Querying the TLD Servers:**  
   - **Action:** The resolver then contacts a TLD server (for example, the one responsible for “.com”) to get the authoritative name server for *example.com*.
   - **Result:** The TLD server responds with the IP address or the name of the authoritative server for the domain.

6. **Contacting the Authoritative Name Server:**  
   - **Action:** The resolver sends a final query to the authoritative name server for *example.com*.  
   - **Response:** The authoritative server responds with the IP address for *www.example.com*.  
   - **Example:** The server might return an IP like **93.184.216.34**.

7. **Caching and Returning the IP:**  
   - **Action:** The resolver caches the IP address for future requests and passes it back to your computer.
   - **Browser Action:** With the IP address now known, your browser can establish a connection to the server at **93.184.216.34** and request the webpage.

8. **Connecting to the Server:**  
   - **Action:** Finally, your browser initiates a connection (via HTTP/HTTPS) to the server using the IP address, retrieves the website content, and displays it.

---

### 3. Detailed Example: Translating URL Text to an Address

Let’s break down an example using the URL `http://www.example.com`:

| **Step**                           | **Process**                                                                                                       | **Example/Result**                             |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| **1. URL Entry**                     | User types `http://www.example.com` in the browser.                                                                | URL: `http://www.example.com`                  |
| **2. Cache Lookup**                  | Browser and OS check for a cached IP.                                                                              | No cache → query recursive resolver            |
| **3. Recursive DNS Query**           | Query sent to the recursive DNS server (e.g., 8.8.8.8).                                                           | Request for `www.example.com`                  |
| **4. Root Server Interaction**       | Resolver asks a root server, “Where can I find .com domain servers?”                                               | Root returns pointers to .com TLD servers       |
| **5. TLD Server Query**              | Resolver contacts a TLD server for “.com” asking, “What is the authoritative server for example.com?”              | TLD server returns details for example.com      |
| **6. Authoritative Server Query**    | Resolver queries the authoritative server for *example.com* about `www.example.com`.                               | Response: IP address **93.184.216.34**           |
| **7. Caching & Final Response**      | Resolver caches the IP and returns it to the user's computer.                                                     | Browser receives IP **93.184.216.34**             |
| **8. Browser Connection**            | Browser uses the IP address to connect to the server and retrieve the website.                                     | Connection established; webpage loaded          |

---

### 4. Additional Considerations

- **Caching:**  
  Each step often uses caching mechanisms to speed up the process. Caches exist at the browser level, operating system level, and even at the resolver level.

- **DNS Propagation:**  
  When changes are made to a domain’s DNS records, it may take time (typically up to 48 hours) for these changes to be reflected globally due to caching.

- **Security:**  
  Modern DNS queries can be encrypted using protocols like DNS over HTTPS (DoH) or DNS over TLS (DoT) to enhance security and privacy.

- **Failure Handling:**  
  If one DNS server does not respond, the resolver will try alternative servers in a process called failover, ensuring a robust system.

---

This step-by-step process highlights how a user-friendly URL is translated into the IP address necessary for your browser to locate and retrieve the correct webpage. The entire DNS resolution process is designed to be efficient, reliable, and secure, ensuring that every click on a URL quickly brings up the desired content.
