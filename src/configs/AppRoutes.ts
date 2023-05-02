export const AppRoutes = {
  Index: '/',
  Books: '/books',
  Book: (id:string|number) => `/books/${id}`,
  Characters: '/characters',
  Character: (id:string|number) => `/characters/${id}`
}