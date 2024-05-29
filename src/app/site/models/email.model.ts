export interface EmailModel {
  from: {email: string
  }
  to: [{email: string}],
  subject: string,
  text: string,
  html: string,
}
