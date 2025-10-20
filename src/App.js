
class App {
  async run() {}
  extractDelimiter(str) { 
    const regex = "\\/\\/(.+?)\\n";
    const matches = [...str.matchAll(regex)];
    return matches.length > 0 ? matches[0][1] : "";
  }
}

export default App;
