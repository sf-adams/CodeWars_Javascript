const domainName = require("./extract-the-domain-from-a-url");

describe.only("Test Domains", () => {
  it("Should pass a range of sample tests", () => {
    expect(domainName("http://google.com")).toBe("google");
    expect(domainName("http://google.co.jp")).toBe("google");
    expect(domainName("www.xakep.ru")).toBe("xakep");
    expect(domainName("https://youtube.com")).toBe("youtube");
  });
});
