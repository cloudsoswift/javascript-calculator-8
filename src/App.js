
class App {
  async run() {}
  extractDelimiter(str) { 
    const regex = "\\/\\/(.+?)\\n";
    const matches = [...str.matchAll(regex)];
    return matches.length > 0 ? matches[0][1] : "";
  }
  escapeAllSpecials(str) { 
    // 정규 표현식에서 특수한 역할을 수행하는 특수문자들을 모두 이스케이프
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

export default App;
