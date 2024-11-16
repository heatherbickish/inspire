export class Quote {
  constructor(data) {
    this.author = data.author
    this.tags = data.tags
    this.description = data.description
    this.quote = data.quote
  }



  get QuoteTemplate() {
    return `
      <p class="hover-author selectable rounded">${this.author}</p>
      <h5 class="quote">${this.quote}</h5>
  `
  }


}