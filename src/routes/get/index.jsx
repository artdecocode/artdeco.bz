export default async (ctx, next) => {
  ctx.setTitle('Hello world')
  ctx.Content = <div>Hello World</div>
  await next()
}
