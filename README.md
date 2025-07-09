# AI Search Auto-Query Script

This JavaScript snippet enables seamless “deep-linking” of user queries directly into an on-page AI-powered search tool.
When a user visits a page with a query string such as `?ask=alarm+monitoring`, the script automatically populates the AI search input and triggers a search.

---

## 🚀 What It Does

* **Reads the query** from the URL (`ask`, `question`, or `q` parameter)
* **Scrolls to the AI search section** if present
* **Populates the search input**
* **Fires all relevant events** so the AI search functions as if typed and submitted by the user
* **No external dependencies, zero UI impact**

---

## ✅ How to Use

1. **Add this script to any page** containing the SDM (or any AI search) widget using the selector `#ai-search-client`.

2. **Include a search input and button** inside a container with ID `ai-search-client`.
   Example:

   ```html
   <div id="ai-search-client">
     <input type="text" ...>
     <button type="button">Search</button>
   </div>
   ```

3. **(Optional) Add a section with ID `discoverySection`** to ensure the page scrolls to the search area when a question is deep-linked.

4. **Link to the page with a query string:**

   * `?ask=YOUR+QUESTION`
   * `?question=YOUR+QUESTION`
   * `?q=YOUR+QUESTION`

**Example:**

```
https://www.sdmmag.com/ask-SDM?ask=wireless+alarm+monitoring
```

---

## 🧠 How It Works

* Waits for the DOM to load
* Detects the query parameter
* Waits (polls) up to 4 seconds for the input and button to appear
* Populates and submits the query

---

## 🔧 Customization

* **Selector change:** Update the `#ai-search-client` selector in the script to match your widget/container.
* **Trigger on other parameters:** Add/edit in the `getQuestion()` function.
* **Change scroll behavior:** Update or remove the `scrollIntoView` call.

---

## 📄 License

MIT License © [SubscriptionArchitect](https://github.com/SubscriptionArchitect)
