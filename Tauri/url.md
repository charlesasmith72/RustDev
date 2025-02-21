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
