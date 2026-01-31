## The "Document as a Page" Mental Model

You're thinking of it perfectly:
- **Document** = the entire webpage
- **querySelector** = Ctrl+F, stop at first match
- **querySelectorAll** = Ctrl+F, collect all matches in a list
- Search goes **top to bottom** in the HTML

## Box Model vs Query Model

You've identified two different mental models, and **both are correct** for different purposes:

**1. Box Model / Tree Structure** (for understanding HTML structure)
```
document (root)
  └── body
      └── div.container
          ├── h1
          └── form
              ├── input#height
              └── div#result
```

**2. Query/Search Model** (for finding elements)
```
Scan document top to bottom →
Find first/all matches →
Return result(s)