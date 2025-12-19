# nodeJsLibrary

A Node.js **Command-Line Interface (CLI)** tool that reads text files and categorizes the frequency of words — showing how many times each word appears in the text.

This project demonstrates practical skills with Node.js file I/O, string processing, and CLI workflows — ideal for showcasing technical fundamentals to recruiters.

## 🚀 Features

- Reads a text file from disk
- Counts how many times each word appears
- Outputs the word frequency results to the console
- Handles basic text normalization (case insensitivity, punctuation removal)

## 🧠 Why This Matters

This repository reflects a real-world utility: parsing textual data and extracting meaningful frequency analytics — a common problem in text processing, search, and data insight tools. It also highlights your proficiency with core Node.js APIs and CLI application design.

## 🧾 Installation

Clone the repository:

```bash
git clone https://github.com/DanielLucasGadelha/nodeJsLibrary.git
cd nodeJsLibrary
nstall dependencies:

npm install
```

## ▶️ Usage

Run the CLI with a text file path:

```
node src/index.js path/to/file.txt
```

Example:

```
node src/index.js ./arquivos/text-sample.txt
```

Output:

```
hello: 5  
world: 3  
nodejs: 2  
```

Each line shows a word followed by how many times it appears.

## 🧪 How It Works

Reads the target file from the file system

Normalizes text (removes punctuation, lowercases words)

Splits the text into tokens

Counts repeats of each word

Logs results sorted by frequency

This approach follows common text-analysis patterns found in word counting utilities and libraries.
NPM

## ⚙️ Development

If you want to explore or enhance the project:

Add support for stop words filtering

Output results in JSON or CSV formats

Add flags for sorting (e.g., ascending/descending)

## 📂 Repository Structure

```
.
├── src/
│   ├── index.js        # CLI entrypoint
│   └── utils.js        # Word counting helpers
├── arquivos/           # Sample input files
├── resultado/          # Example outputs
├── package.json
└── README.md
```

## 📝 Notes

Built with Node.js (no external dependencies required)

Designed for CLI use and recruiters reviewing JavaScript fundamentals

## 📜 License
© Daniel Lucas Gadelha
