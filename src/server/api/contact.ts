export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, message } = body

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid input' })
  }

  // TODO: メール送信ロジックをここに追加 (例: AWS SES, SendGrid, Nodemailer)
  console.log(`Received message from ${name} (${email}): ${message}`)

  return { message: 'Message sent successfully' }
})
